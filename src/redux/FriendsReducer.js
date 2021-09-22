import usersAPI from "../api/api";
import {updateObjectOfArray} from "../libs/CasesUnion";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const S_T_U_C = 'SET-USER-TOTAL-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    friendsData: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
}
const friendsReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                friendsData: updateObjectOfArray(state.friendsData, action.userId, 'id', {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                friendsData: updateObjectOfArray(state.friendsData, action.userId, 'id', {followed: false})
    }
        case SET_USERS: {
            return {
                ...state, friendsData: [...action.users],
                //...state.friendsData,
            }
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case S_T_U_C: {
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
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

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: S_T_U_C, count: totalUsersCount});
export const togleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(togleIsFetching(true))
    const data = await usersAPI.getUsers(currentPage, pageSize)

    dispatch(togleIsFetching(false))
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
}

const followUnfollowFlow = async (dispatch, idNum, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, idNum))
    const data = await apiMethod(idNum)

    if (data.resultCode === 0) {
        dispatch(actionCreator(idNum))
    }
    dispatch(toggleFollowingProgress(false, idNum))
}

export const follow = (idNum) => async (dispatch) => {
    followUnfollowFlow(dispatch, idNum, usersAPI.createFollow.bind(usersAPI), followSuccess)
}

export const unfollow = (idNum) => async (dispatch) => {
    followUnfollowFlow(dispatch, idNum, usersAPI.deleteFollow.bind(usersAPI), unfollowSuccess)
}


export default friendsReducer;