import s from './ProfileInfo.module.css'
import ProfileStatus from "./ProfileStatus"
import profileDef from '../../../common/images/profileDef.png'
import React, {ChangeEvent, useState} from "react";
import background_profile from '../../../assets/images/background_profile.jpg'
import {savePhoto, saveProfile,} from "../../../redux/ProfileReducer";
import {useDispatch} from "react-redux";
import ProfileDataForm, {Inputs} from './ProfileDataForm'
import {ProfileContactsType, ProfileType} from "../../../Types/UnionTypes";
import {SubmitHandler} from "react-hook-form";


type ProfileInfoPropsType = {
    isOwner?: string
    profile: ProfileType
}

const ProfileInfo = ({isOwner, profile}: ProfileInfoPropsType) => {

    const [editMode, setEditMode] = useState(false);

    const dispatch = useDispatch()

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            dispatch(savePhoto(e.target.files[0]))
        }
    }
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        // @ts-ignore
        // todo edit location of then
        dispatch(saveProfile(formData)).then(
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
                        <img className={s.avatar} src={profile.photos.large || profileDef}/>
                    </div>
                    {!isOwner && <input className={s.file} type={"file"} onChange={onMainPhotoSelected}/>
                    }
                    <span className={s.name}><b>{profile.fullName}</b></span>
                    <div className={s.status}>
                        {!isOwner && <ProfileStatus/>}
                    </div>
                </div>
                {editMode
                    ? <ProfileDataForm profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => {
                        setEditMode(true)
                    }}/>}

            </div>
        </div>
    )
}

type ProfileDataPropsType = {
    profile: ProfileType
    isOwner?: string
    goToEditMode: () => void
}
const ProfileData: React.FC<ProfileDataPropsType> = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            {!isOwner && <div>
                <button onClick={goToEditMode}>Edit</button>
            </div>}
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
                <b>Contacts</b>: {Object
                .keys(profile.contacts)
                .map(key => {
                    return <Contact key={key} contactTitle={key}
                                    contactValue={profile.contacts[key as keyof ProfileContactsType]}/>
                })}
            </div>
        </div>
    )
}

type ContactPropsType = {
    contactTitle: string
    contactValue: any
}
export const Contact = ({contactTitle, contactValue}: ContactPropsType) => {

    return <div>
        {/*<box-icon name={((contactTitle != 'website') && (contactTitle != 'mainLink'))
            ? contactTitle
            : 'spreadsheet'} type='logo'></box-icon>*/}
        <b>{contactTitle}</b>: {contactValue}</div>
}


export default ProfileInfo;