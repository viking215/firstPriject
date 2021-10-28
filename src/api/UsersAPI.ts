import {GetUsersResponseType, instance, APIResponseType} from "./api";

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 20) {
        return instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    deleteFollow(idNum: number) {
        return instance.delete<APIResponseType>(`follow/${idNum}`)
            .then(response => response.data)
    },

    createFollow(idNum: number) {
        return instance.post<APIResponseType>(`follow/${idNum}`)
            .then(response => response.data)
    },
}

export default usersAPI