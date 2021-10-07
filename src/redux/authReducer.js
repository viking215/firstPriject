import {authAPI, securityAPI,} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'my-network/auth/SET_USER_DATA';
const GET_CAPTCHA_SUCCESS = 'GET_CAPTCHA_SUCCESS'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
}
const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_SUCCESS:
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

export const getCaptchaSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_SUCCESS,
    payload: {captchaUrl}
})

export const authMe = () => async (dispatch) => {
    const data = await authAPI.authMe();
    if (data.resultCode === 0) {
        let {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}


export const authLogin = (email, password, rememberMe, captcha) => async (dispatch) => {
    const data = await authAPI.authLogin(email, password, rememberMe, captcha);
    if (data.resultCode === 0) {
        dispatch(authMe())
    } else {
        if (data.resultCode === 10) {
            dispatch(getCaptchaUrl)
        }
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

export const getCaptchaUrl = async (dispatch) => {
    debugger
    const data = await securityAPI.getCaptchaUrl();
    const captchaUrl = data.url;
    dispatch(getCaptchaSuccess(captchaUrl))
}


export default authReducer;