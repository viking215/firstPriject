import {updateObjectOfArray} from "../libs/CasesUnion";
import {ResultCodesEnum, UsersType} from "../Types/UnionTypes";
import {BaseThunkType, InferActionsTypes, RootStateType} from "./redux-store";
import {Dispatch} from "redux";
import usersAPI from "../api/UsersAPI";




const initialState = {
    users: [] as Array<UsersType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>,  // array of user Id
}

type InitialState = typeof initialState

const usersReducer = (state = initialState, action: ActionsTypes): InitialState => {

    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: updateObjectOfArray(state.users, action.userId, 'id', {followed: true})
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: updateObjectOfArray(state.users, action.userId, 'id', {followed: false})
            }
        case 'SET-USERS': {
            return {...state, users: action.users,}
        }
        case 'SET-CURRENT-PAGE': {
            return {...state, currentPage: action.currentPage}
        }
        case 'SET-USER-TOTAL-COUNT': {
            return {...state, totalUsersCount: action.count}
        }
        case 'TOGGLE_IS_FETCHING': {
            return {...state, isFetching: action.isFetching}
        }
        case 'TOGGLE_IS_FOLLOWING_PROGRESS': {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
    return state;
}

type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>
type DispatchType = Dispatch<ActionsTypes>

export const actions = {
    followSuccess: (userId: number) => ({type: 'FOLLOW', userId} as const),
    unfollowSuccess: (userId: number)=> ({type: 'UNFOLLOW', userId} as const),
    setUsers: (users: Array<UsersType>) => ({type: 'SET-USERS', users} as const),
    setCurrentPage: (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const),
    setTotalUsersCount: (totalUsersCount: number) => ({type: 'SET-USER-TOTAL-COUNT', count: totalUsersCount} as const),
    togleIsFetching: (isFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching} as const),
    toggleFollowingProgress: (isFetching: boolean, userId: number) => ({
        type: 'TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userId} as const),
}


export const getUsers = (currentPage: number, pageSize: number): ThunkType => {
    return async (dispatch, getState) => {
        dispatch(actions.togleIsFetching(true))
        const data = await usersAPI.getUsers(currentPage, pageSize)

        dispatch(actions.togleIsFetching(false))
        dispatch(actions.setUsers(data.items));
        dispatch(actions.setTotalUsersCount(data.totalCount));
    }
}

const _followUnfollowFlow = async (dispatch: DispatchType, idNum: number, apiMethod: any,
                                   actionCreator: (idNum: number) => ActionsTypes) => {
    dispatch(actions.toggleFollowingProgress(true, idNum))
    const data = await apiMethod(idNum)

    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(actionCreator(idNum))
    }
    dispatch(actions.toggleFollowingProgress(false, idNum))
}

export const follow = (idNum: number): ThunkType => async (dispatch, getState) => {
    _followUnfollowFlow(dispatch, idNum, usersAPI.createFollow.bind(usersAPI), actions.followSuccess)
}

export const unfollow = (idNum: number): ThunkType => async (dispatch, getState) => {
    _followUnfollowFlow(dispatch, idNum, usersAPI.deleteFollow.bind(usersAPI), actions.unfollowSuccess)
}


export default usersReducer;