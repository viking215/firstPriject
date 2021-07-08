import s from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/preloader";


const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }
    debugger
    return (
        <div>
            <div className={s.inf}>
                <div>
                    <img className={s.avatar} src={props.profile.photos.large}/>
                </div>
                <div>
                    Contacts:
                    <div>GitHub: {props.profile.contacts.github}</div>
                    <div>VK: {props.profile.contacts.vk}</div>
                    <div>Facebook: {props.profile.contacts.facebook}</div>
                    <div>Instagram: {props.profile.contacts.instagram}</div>
                    <div>twitter: {props.profile.contacts.twitter}</div>
                    <div>website: {props.profile.contacts.website}</div>

                </div>
                ava + descr
            </div>
        </div>

    )
}

export default ProfileInfo;