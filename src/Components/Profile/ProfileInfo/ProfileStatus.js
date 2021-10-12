import s from './ProfileInfo.module.css'
import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {updateStatus} from "../../../redux/ProfileReducer";

const ProfileStatus = () => {
    const status = useSelector((state) => state.profilePage.status)

    const [editMode, setEditMode] = useState(false);
    const [editedStatus, setStatus] = useState(status);



    const dispatch = useDispatch()
    

    useEffect(() => {
        setStatus(status);
    }, [status]);

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
         dispatch(updateStatus(editedStatus))
     }

    const onStatusChange = (e) => {
        setStatus(e.target.value)
    }
    const handleFocus = (event) => {
        event.target.select();
    }

    return (
        <div>
            {!editMode &&
            <div>
                <b>Status: </b><span onDoubleClick={activateEditMode}>{status || 'Click for set status'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus={handleFocus} onBlur={deactivateEditMode}
                       value={editedStatus}/>
            </div>
            }
        </div>

    )
}


export default ProfileStatus