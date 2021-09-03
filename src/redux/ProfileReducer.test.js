import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    postsData: [
        {id: 1, text: 'I am Batman', likesCount: 44},
        {id: 1, text: 'Where the detonator?!', likesCount: 15},
        {id: 2, text: "You couldn't give it to an ordinary person in the crowd.", likesCount: 25},
    ],
    profile: null,
    status: '',
}
const profileReducer = (state = initialState, action) => {
    console.log(action.type)

    switch (action.type) {
        case ADD_POST: {

            let newPost = {id: 5, text: action.newPostText, likesCount: 0,}
            return {
                ...state,
                postsData: [...state.postsData, newPost]
            
            }
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            };
        }

        case SET_STATUS: {
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

export const addPostAC = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

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
               dispatch(setStatus(data))
        });

    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(data => {
            if (data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        });
    }
}

export default profileReducer;
