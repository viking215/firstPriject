import React from "react";
import styles from "./friends.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import axios from "axios";
import Pagination from "../../libs/Pagination";

const Friends = (props) => {


    return <div>
        <Pagination onPageChanged={props.onPageChanged} totalUsersCount={props.totalUsersCount}
                    pageSize={props.pageSize}/>
        {
            props.friendsData.map(u => <div className={styles.friendBlock} key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.avatar}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {props.unfollowClick(u.id)}}>Unfollow</button>
                                    : <button onClick={() => {props.followClick(u.id)}}>Follow</button>}
                        </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
                </div>
            )}
    </div>
}

export default Friends