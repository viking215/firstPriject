import {
    AuthLoginResponseType,
    AuthMeResponseType,
    ResultCodesEnum,
    ResultCodesForCaptchaEnum
} from "../Types/UnionTypes";
import {instance, APIResponseType} from "./api";

const authAPI = {
    authMe() {
        return instance.get<APIResponseType<AuthMeResponseType>>(`auth/me`)
            .then(response => response.data)
    },
    authLogin(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post<APIResponseType<AuthLoginResponseType, ResultCodesEnum | ResultCodesForCaptchaEnum>>
        ('auth/login', {email, password, rememberMe, captcha})
            .then(response => response.data)
    },
    authLogout() {
        return instance.delete('auth/login')
            .then(response => response.data)
    }
}

export default authAPI