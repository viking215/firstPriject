import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "dae22770-e1c3-4929-886d-5b6cfc71c8c4"
    },
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,

})

const usersAPI = {
    getUsers(currentPage = 1, pageSize = 20) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    getProfile(userId = 2) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    authMe() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    }
}

export default usersAPI