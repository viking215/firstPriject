import s from './ProfileInfo.module.css'
import ProfileStatus from "./ProfileStatus"
import profileDef from '../../../common/images/profileDef.png'
import React, {useState} from "react";
import background_profile from '../../../assets/images/background_profile.jpg'
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = (props) => {

    const [editMode, setEditMode] = useState(false);

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData) => {
        props.saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        )
    }

    return (

        <div className={s.head}>
            <img className={s.back} src={background_profile}/>
            <div className={s.items}>
                <div className={s.middle}>
                    <div className={s.avatar_block}>
                        <img className={s.avatar} src={props.profile.photos.large || profileDef}/>
                    </div>
                    {!props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                    <span className={s.name}><b>{props.profile.fullName}</b></span>
                    <div className={s.status}>
                        {!props.isOwner && <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>}
                    </div>
                </div>
                { editMode
                    ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={() => {
                        setEditMode(true)
                    }} />}

            </div>
        </div>
    )
}

export const Contact = ({contactTitle, contactValue}) => {
    return <div>
        <box-icon name={((contactTitle != 'website') && (contactTitle != 'mainLink'))
            ? contactTitle
            : 'spreadsheet'} type='logo'></box-icon>
        <b>{contactTitle}</b>: {contactValue}</div>
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
    <div>
        {!isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
        <div>
            <b>Looking for a job:</b> {profile.lookingForAJob ? 'Yes' : 'No'}
        </div>
        <div>
            <b>My professional skils</b> {profile.lookingForAJobDescription}
        </div>
        <div>
            <b>About Me:</b> {profile.aboutMe}
        </div>
        <div className={s.contacts}>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>
    )
}


export default ProfileInfo;