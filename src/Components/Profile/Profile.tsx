import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import Preloader from "../common/preloader/preloader";
import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getProfile, getStatus} from "../../redux/ProfileReducer";
import {useParams} from "react-router-dom";
import {useAppSelector} from "../../redux/redux-store";


const Profile = () => {

    const profile = useAppSelector((state) => state.profilePage.profile)
    const authorizedUserId = useAppSelector((state) => state.auth.id)

    const dispatch = useDispatch()
    let {userId} = useParams<{ userId?: string }>()
    const currentId = Number(userId) || authorizedUserId

    useEffect(() => {
        if (currentId !== null) {
            dispatch(getProfile(currentId))
            dispatch(getStatus(currentId))
        }
    }, [currentId])

    if (!profile) return <Preloader/>
    return (
        <div>
            <ProfileInfo profile={profile} isOwner={userId}/>
            <MyPosts/>
        </div>
    )
}

export default Profile;

