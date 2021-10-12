import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import Preloader from "../common/preloader/preloader";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProfile, getStatus} from "../../redux/ProfileReducer";
import {useParams} from "react-router-dom";
import {useAuth} from "../../hoc/withAuthRedirect";


const Profile = () => {

    const profile = useSelector((state) => state.profilePage.profile)
    const authorizedUserId = useSelector((state) => state.auth.id)

    useAuth()

    const dispatch = useDispatch()
    let {userId} = useParams()
    const currentId = userId || authorizedUserId

    useEffect(() => {

        dispatch(getProfile(currentId))
        dispatch(getStatus(currentId))
    }, [userId])

    if (!profile) return <Preloader />
    return (
        <div>

            <ProfileInfo profile={profile} isOwner={userId}/>
            <MyPosts/>
        </div>
    )
}

export default Profile;

