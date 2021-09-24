import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'my-network/auth/SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}
const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state;
    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
})

export const authMe = () => async (dispatch) => {
    const data = await authAPI.authMe();
    if (data.resultCode === 0) {
        let {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}


export const authLogin = (email, password, rememberMe) => async (dispatch) => {
    const data = await authAPI.authLogin(email, password, rememberMe);
    if (data.resultCode === 0) {
        dispatch(authMe())
    } else {
        let message = data.messages.length > 0 ? data.messages[0] : "some error";
        dispatch(stopSubmit("login", {_error: message}))
    }
}


export const authLogout = async (dispatch) => {
    const data = await authAPI.authLogout()
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}


export default authReducer;