const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const S_T_U_C = 'SET-USER-TOTAL-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    friendsData: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
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
            return {...state, friendsData: [...action.users],
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
        default:
            return state;
    }

    return state;
}

export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: S_T_U_C, count: totalUsersCount});
export const togleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})



export default friendsReducer;