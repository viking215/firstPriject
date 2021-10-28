import {FormAction, stopSubmit} from "redux-form";
import {BaseThunkType, InferActionsTypes, RootStateType} from "./redux-store";
import {Dispatch} from "redux";
import {ResultCodesEnum, ResultCodesForCaptchaEnum} from "../Types/UnionTypes";
import authAPI from "../api/AuthAPI";
import securityAPI from "../api/SecurityAPI";


const initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null,
}
export type InitialStateType = typeof initialState


const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case 'my-network/auth/SET_USER_DATA':
        case 'GET_CAPTCHA_SUCCESS':
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state;
    }
}

type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes | FormAction>
type DispatchType = Dispatch<ActionsTypes>


export const actions = {
    setAuthUserData: (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
        type: 'my-network/auth/SET_USER_DATA',
        payload: {id, email, login, isAuth}
    }),
    getCaptchaSuccess: (captchaUrl: string) => ({
        type: 'GET_CAPTCHA_SUCCESS',
        payload: {captchaUrl}
    })
}

export const authMe = (): ThunkType => async (dispatch) => {
    const data = await authAPI.authMe();
    if (data.resultCode === ResultCodesEnum.Success) {
        let {id, email, login} = data.data;
        dispatch(actions.setAuthUserData(id, email, login, true));
    }
}

export const authLogin = (email: string, password: string,
                          rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {
    const data = await authAPI.authLogin(email, password, rememberMe, captcha);
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(authMe())
    } else {
        if (data.resultCode === ResultCodesForCaptchaEnum.CaptchaIsRequired) {
            dispatch(getCaptchaUrl)
        }
        let message = data.messages.length > 0 ? data.messages[0] : "some error";
        dispatch(stopSubmit("login", {_error: message}))
    }
}


export const authLogout:ThunkType = async (dispatch: DispatchType) => {
    const data = await authAPI.authLogout()
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(actions.setAuthUserData(null, null, null, false))
    }
}

export const getCaptchaUrl = async (dispatch: DispatchType) => {
    const data = await securityAPI.getCaptchaUrl();
    const captchaUrl = data.url;
    dispatch(actions.getCaptchaSuccess(captchaUrl))
}


export default authReducer;