export type ProfilePhotosType = {
    small: string | null
    large: string | null
}
export type PostsDataType = {
    id: number
    text: string
    likesCount: number
}
export type ProfileContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ProfileContactsType
    photos: ProfilePhotosType
    aboutMe: string
    resultCode: ResultCodesEnum
}
export type UsersType = {
    id: number
    name: string
    status: string
    photos: ProfilePhotosType
    followed: boolean
}

// энамки для resultCode
export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}

export enum ResultCodesForCaptchaEnum {
    CaptchaIsRequired = 10
}


// для аунтификации
export type AuthMeResponseType = {
    id: number
    email: string
    login: string

}

export type AuthLoginResponseType = {
        userId: number
}


export type SavePhotoResponseType = {
    data: {
        small: string
        large: string
    }
    resultCode: ResultCodesEnum
    messages: Array<string>
}


// security
export type GetCaptchaUrlResponseType = {
    url: string
}