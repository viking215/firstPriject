const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,

}
const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }

        default:
            return state;
    }
}

export const setAuthUserData = (id, email, login,) => ({type: SET_USER_DATA, data: {id, email, login}})

export default authReducer;