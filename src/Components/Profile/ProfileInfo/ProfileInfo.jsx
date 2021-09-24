import s from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/preloader";
import userPhoto from "../../../assets/images/user.png"
import ProfileStatus from "./ProfileStatus"
import profileDef from '../../../common/images/profileDef.png'
import React from "react";
import background_profile from '../../../assets/images/background_profile.jpg'

const ProfileInfo = (props) => {

    return (

        <div className={s.head}>
            <img className={s.back} src={background_profile}/>
            <div className={s.items}>
                <div className={s.middle}>

                    <div className={s.avatar_block}>
                        <img className={s.avatar} src={props.profile.photos.large != null ?
                            props.profile.photos.large : profileDef}/>
                    </div>
                    <span className={s.name}>{props.profile.fullName}</span>
                    <div className={s.status}>
                        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                    </div>
                    {/*<div>About me: {props.profile.aboutMe}</div>*/}
                </div>
                <div className={s.filter}>
                    <details>
                        <summary>Contacts</summary>
                        <div className={s.contacts}>
                            <div className={s.item}>GitHub: {props.profile.contacts.github}</div>
                            <div className={s.item}>VK: {props.profile.contacts.vk}</div>
                            <div className={s.item}>Facebook: {props.profile.contacts.facebook}</div>
                            <div className={s.item}>Instagram: {props.profile.contacts.instagram}</div>
                            <div className={s.item}>twitter: {props.profile.contacts.twitter}</div>
                            <div className={s.item}>website: {props.profile.contacts.website}</div>
                        </div>
                    </details>
                </div>
                {props.profile.lookingForAJob ? 'Ищу работу' : 'Уже работаю'}
            </div>
        </div>
    )
}

export default ProfileInfo;