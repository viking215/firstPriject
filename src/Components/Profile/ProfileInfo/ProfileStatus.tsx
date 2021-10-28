import React, {useEffect, useState} from 'react'
import {useDispatch} from "react-redux";
import {updateStatus} from "../../../redux/ProfileReducer";
import {useAppSelector} from "../../../redux/redux-store";

const ProfileStatus = () => {
    const status = useAppSelector((state) => state.profilePage.status)

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

    const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.target.value)
    }


    const handleFocus = (e: boolean) => editMode



    return (
        <div>
            {!editMode &&
            <div>
                <b>Status: </b><span onDoubleClick={activateEditMode}>{status || 'Click for set status'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange}
                       autoFocus={handleFocus(false)} onBlur={deactivateEditMode}
                       value={editedStatus}/>
            </div>
            }
        </div>

    )
}


export default ProfileStatus