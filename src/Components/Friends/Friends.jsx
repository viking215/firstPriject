import React from "react";
import Pagination from "../../libs/Pagination";
import User from "./User";


const Friends = ({followingInProgress, onPageChanged, totalUsersCount, pageSize,
                     friendsData, unfollowClick, followClick}) => {



    return <div>
        <Pagination onPageChanged={onPageChanged} totalUsersCount={totalUsersCount}
                    pageSize={pageSize}/>
        <div>
        {
            friendsData.map(u => <User user={u} followingInProgress={followingInProgress}
                                       key={u.key} followClick={followClick} unfollowClick={unfollowClick}/>)
        }
        <Pagination onPageChanged={onPageChanged} totalUsersCount={totalUsersCount}
                    pageSize={pageSize}/>
    </div>
    </div>
}

export default Friends