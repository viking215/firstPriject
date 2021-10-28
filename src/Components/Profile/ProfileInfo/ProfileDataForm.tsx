import {SubmitHandler, useForm} from "react-hook-form";
import s from './ProfileInfo.module.css'
import React from "react";
import {Alert} from "@mui/material";
import {ProfileType} from "../../../Types/UnionTypes";


export type Inputs = ProfileType
type ProfileDataFormPropsType = {
    profile: ProfileType
    onSubmit: SubmitHandler<Inputs>
}

const ProfileDataForm = ({profile, onSubmit}: ProfileDataFormPropsType) => {

    const {register, handleSubmit, formState: {errors},} = useForm<Inputs>({
        defaultValues: {
            fullName: profile.fullName,
            lookingForAJob: profile.lookingForAJob,
            lookingForAJobDescription: profile.lookingForAJobDescription,
            aboutMe: profile.aboutMe,
            contacts: profile.contacts
        },
        mode: 'onSubmit',
    })


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    Name: <input {...register('fullName')}/>
                    {errors.fullName && <Alert severity="warning">kzkzkzk</Alert>}
                </div>
                <div>
                    Looking for a job: <input type='checkbox' {...register('lookingForAJob')}/>
                    {errors.lookingForAJob && <Alert severity="warning">kzkzkzk</Alert>}
                </div>
                <div>
                    My professional skils: <input {...register('lookingForAJobDescription')}/>
                    {errors.lookingForAJobDescription && <Alert severity="warning">kzkzkzk</Alert>}
                </div>
                <div>
                    About Me: <input {...register('aboutMe')}/>
                    {errors.aboutMe && <Alert severity="warning">kzkzkzk</Alert>}
                </div>
                <div className={s.contacts}>
                    <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                    return <div className={s.contacts} key={key}>

                        <b>{key}</b>: <input {// @ts-ignore
                            ...register(`contacts.${key}`)}/>
                    </div>
                })}
                </div>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default ProfileDataForm