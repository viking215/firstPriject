import s from './ProfileInfo.module.css'
import React, {useEffect, useState} from 'react'

const ProfileStatus = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
         props.updateStatus(status)
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
                <b>Status: </b><span onDoubleClick={activateEditMode}>{props.status || 'Click for set status'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus={handleFocus} onBlur={deactivateEditMode}
                       value={status}/>
            </div>
            }
        </div>

    )
}


export default ProfileStatus