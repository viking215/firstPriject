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

    deleteFollow(idNum) {
        return instance.delete(`follow/${idNum}`)
            .then(response => response.data)
    },

    createFollow(idNum) {
        return instance.post(`follow/${idNum}`)
            .then(response => response.data)
    },

}

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    authLogin(email, password, rememberMe = false) {
        return instance.post('auth/login', {email, password, rememberMe})
            .then(response => response.data)
    },
    authLogout() {
        return instance.delete('auth/login')
            .then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },

    getStatus(userId) {
      return instance.get(`profile/status/${userId}`)
            .then(response => response.data)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status})
            .then(response => response.data)
    }

}

export default usersAPI