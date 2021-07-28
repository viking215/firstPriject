import s from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/preloader";
import profileBackground from "../../../assets/images/profileBackground.jpg"
import userPhoto from "../../../assets/images/user.png"
import ProfileStatus from "./ProfileStatus"


const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }
    debugger
    return (
        <div className={s.head}>
            <img className={s.back} src={profileBackground}/>

            <div>
                <div className={s.middle}>
                    <img className={s.avatar} src={props.profile.photos.large != null ?
                        props.profile.photos.large : userPhoto}/>
                    <ProfileStatus status={props.status}/>
                    <span className={s.name}>{props.profile.fullName}</span>
                    <div>About me: {props.profile.aboutMe}</div>
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