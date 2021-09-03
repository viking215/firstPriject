import React from "react";
import styles from "./friends.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import Pagination from "../../libs/Pagination";


const Friends = ({followingInProgress, onPageChanged, totalUsersCount, pageSize,
                     friendsData, unfollowClick, followClick}) => {



    return <div>
        <Pagination onPageChanged={onPageChanged} totalUsersCount={totalUsersCount}
                    pageSize={pageSize}/>
        {
            friendsData.map(u => <div className={styles.friendBlock} key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.avatar}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                                unfollowClick(u.id)
                            }}>Unfollow</button>
                            : <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                                followClick(u.id)
                            }}>Follow</button>}
                        </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>l
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
                </div>
            )}
        <Pagination onPageChanged={onPageChanged} totalUsersCount={totalUsersCount}
                    pageSize={pageSize}/>
    </div>
}

export default Friends