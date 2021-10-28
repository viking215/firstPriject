import axios from "axios";
import {ResultCodesEnum, UsersType} from "../Types/UnionTypes";

export const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "dae22770-e1c3-4929-886d-5b6cfc71c8c4"
    },
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,

})

// общий тип, дженерик
export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D
    resultCode: RC
    messages: Array<string>
}

export type GetUsersResponseType = {
    items: Array<UsersType>
    totalCount: number
    error: string | null
}











