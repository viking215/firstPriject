import {GetCaptchaUrlResponseType} from "../Types/UnionTypes";
import {instance} from "./api";

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<GetCaptchaUrlResponseType>(`security/get-captcha-url`)
            .then(response => response.data)
    }
}

export default securityAPI