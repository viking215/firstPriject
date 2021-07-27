import usersAPI from "../api/api";

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
                friendsData: state.friendsData.map(f => {
                    if (f.id === action.userId) {
                        return {...f, followed: true}
                    }
                    return f;

                })
            }
        case UNFOLLOW:
            return {
                ...state,
                friendsData: state.friendsData.map(f => {
                    if (f.id === action.userId) {
                        return {...f, followed: false}
                    }
                    return f;
                })
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

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(togleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(togleIsFetching(false))
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
}

export const follow = (idNum) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, idNum))
        usersAPI.createFollow(idNum, {}).then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(idNum))
            }
            dispatch(toggleFollowingProgress(false, idNum))
        });
    }
}
export const unfollow = (idNum) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, idNum))
        usersAPI.deleteFollow(idNum).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowSuccess(idNum))
            }
            dispatch(toggleFollowingProgress(false, idNum))
        })
    }
}


export default friendsReducer;