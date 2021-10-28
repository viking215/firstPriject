import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import {UsersType} from "../../Types/UnionTypes";


type UserType = {
    user: UsersType
    followingInProgress: Array<number>
    unfollowClick: (idNum: number) => void
    followClick: (idNum: number) => void

}
const User = ({user, followingInProgress, unfollowClick, followClick}: UserType) => {

    return (
        <div key={user.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.avatar} />
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                unfollowClick(user.id)
                            }}>Unfollow</button>
                            : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                followClick(user.id)
                            }}>Follow</button>}
                        </div>
                </span>
            <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                </span>
        </div>
    )
}


export default User