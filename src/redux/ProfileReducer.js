import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const U_N_P_T = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_USER_PROFILE'

let initialState = {
    postsData: [
        {id: 1, text: 'I am Batman', likesCount: 44},
        {id: 1, text: 'Where the detonator?!', likesCount: 15},
        {id: 2, text: "You couldn't give it to an ordinary person in the crowd.", likesCount: 25},
    ],
    newPostText: "",
    profile: null,
    status: '',
}
const profileReducer = (state = initialState, action) => {
    console.log(action.type)

    switch (action.type) {
        case ADD_POST: {

            let newPost = {id: 5, text: state.newPostText, likesCount: 0,}
            return {
                ...state,
                newPostText: '',
                postsData: [...state.postsData, newPost]
            }
        }
        case U_N_P_T: {
            return {
                ...state,
                newPostText: action.newText,
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            };
        }

        case SET_STATUS: {
            debugger
            return {
                ...state,
                status: action.status,
            };
        }
        default:
            return state;
    }
    return state;
}

export const addPostAC = () => ({type: ADD_POST})
export const updateNewPostTextAC = (text) => ({type: U_N_P_T, newText: text,});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => {
    debugger
    return {type: SET_STATUS, status}
};

export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data))
        });
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(data => {
    debugger
               dispatch(setStatus(data))
        });
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(data => {
            if (data.resultCode === 0) {
                dispatch(setStatus(data))
            }
        });
    }
}

export default profileReducer;
