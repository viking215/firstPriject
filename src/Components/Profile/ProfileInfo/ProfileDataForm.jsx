import React from "react";
import s from './ProfileInfo.module.css'
import {reduxForm} from "redux-form";
import {createField, Textarea} from "../../common/FormsControls/formsControls";
import {Input} from "../../../common/FormsControls/formsControls";
import style from "../../common/FormsControls/formsControls.module.css";


const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div><button>Coinform</button></div>
            {error && <div className={style.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <b>Name</b>: {createField(null, 'fullName', null, Input, null)}
            </div>
            <div>
                <b>Looking for a job:</b> {createField(null, 'lookingForAJob', 'checkbox', Input, null)}
            </div>
            <div>
                <b>My professional skils</b> {createField('Skils', 'lookingForAJobDescription', null, Textarea, null)}
            </div>
            <div>
                <b>About Me:</b> {createField(null, 'aboutMe', null, Textarea, null)}
            </div>
            <div className={s.contacts}>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <div className={s.contacts} key={key}>
                    <b>{key}: {createField(key, `contacts.${key}`, null, Input, null)}</b>
                </div>
            })}
            </div>
        </form>

    )
}


const ProfileDataFormReduxForm = reduxForm({form: 'editProfile'})(ProfileDataForm)


export default ProfileDataFormReduxForm