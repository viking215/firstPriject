import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/preloader/preloader";
import React from "react";
import  s from './Profile.module.css'



const Profile = (props) => {
    if (!props.profile) return <Preloader/>
    return (
        <div>

            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}
            isOwner={props.isOwner} savePhoto={props.savePhoto} saveProfile={props.saveProfile}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;
