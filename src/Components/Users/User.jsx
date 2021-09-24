import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";



const User = ({user, followingInProgress, unfollowClick, followClick}) => {

    return (
        <div key={user.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.avatar}/>
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
                        <div>{user.name}</div>l
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{"user.location.country"}</div>
                        <div>{"user.location.city"}</div>
                    </span>
                </span>
        </div>
    )
}


export default User