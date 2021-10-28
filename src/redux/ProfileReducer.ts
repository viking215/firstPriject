import { FormAction, stopSubmit } from "redux-form"
import profileAPI from "../api/ProfileAPI"
import { PostsDataType, ProfilePhotosType, ProfileType, ResultCodesEnum } from "../Types/UnionTypes"
import {BaseThunkType, InferActionsTypes } from "./redux-store"
import {Redirect} from "react-router-dom";
import React from "react";


const initialState = {
    postsData: [
        {id: 1, text: 'test text', likesCount: 10},

    ] as Array<PostsDataType>,
    profile: null as ProfileType | null,
    status: '',
    editMode: false,
}

export type InitialState = typeof initialState

const profileReducer = (state = initialState, action: ActionsTypes): InitialState => {

    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {id: 5, text: action.newPostText, likesCount: 0,}
            return {
                ...state,
                postsData: [...state.postsData, newPost]
            }
        }
        case 'DELETE_POST': {
            return {...state, postsData: state.postsData.filter(p => p.id !== action.postId)}
        }

        case 'SET_USER_PROFILE': {
            return {
                ...state,
                profile: action.profile,
            };
        }

        case 'SET_STATUS': {
            return {
                ...state,
                status: action.status,
            };
        }
        case 'SAVE_PHOTO_SUCCESS': {
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType};
        }

        default:
            return state;
    }
    return state;
}


type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes | FormAction>

export const actions = {
    addPostAC: (newPostText: string) => ({type: 'ADD-POST', newPostText} as const ),
    deletePost: (postId: number) => ({type: 'DELETE_POST', postId} as const ),
    setUserProfile: (profile: ProfileType) => ({type: 'SET_USER_PROFILE', profile} as const),
    setStatus: (status: string) => ({type: 'SET_STATUS', status} as const),
    savePhotoSuccess: (photos: ProfilePhotosType) => ({type: 'SAVE_PHOTO_SUCCESS', photos} as const) ,
}


export const getProfile = (userId: number): ThunkType => async (dispatch, getState) => {
        const data = await profileAPI.getProfile(userId)
        dispatch(actions.setUserProfile(data))

}

export const getStatus = (userId: number | null): ThunkType => async (dispatch) => {
    if (userId !== null) {
        const data = await profileAPI.getStatus(userId)
        dispatch(actions.setStatus(data))
    }

}


export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    const data = await profileAPI.updateStatus(status)
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(actions.setStatus(status))
    }
}
export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    const data = await profileAPI.savePhoto(file)
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(actions.savePhotoSuccess(data.data.photos))
    }
}

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.id
    const data = await profileAPI.saveProfile(profile)
    if (data.resultCode === ResultCodesEnum.Success) {
        if (userId != null) {
            dispatch(getProfile(userId))
        } else {
            throw new Error("userId can't be null")
        }
    } else {
        dispatch(stopSubmit("editProfile", {_error: data.messages[0]}))
        return Promise.reject(data.messages[0])
    }
}


export default profileReducer;
