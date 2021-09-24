import React, {useEffect} from "react";
import Pagination from "../../libs/Pagination";
import User from "./User";
import {
    CurrentPage,
    FollowingInProgress,
    IsFetching,
    PageSize,
    TotalUsersCount
} from "../../redux/Users-selector";
import {useDispatch, useSelector} from "react-redux";
import {follow, getUsers, unfollow} from "../../redux/UserssReducer";
import Preloader from "../common/preloader/preloader";


const Users = () => {
    const pageSize = useSelector(PageSize)
    const totalUsersCount = useSelector(TotalUsersCount)
    const currentPage = useSelector(CurrentPage)
    const isFetching = useSelector(IsFetching)
    const followingInProgress = useSelector(FollowingInProgress)
    const friendsData = useSelector((state) => state.friendsData.friendsData)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers(currentPage, pageSize))
    }, [])


    const unfollowClick = (idNum) => {
        dispatch(unfollow(idNum))
    }

    const followClick = (idNum) => {
        dispatch(follow(idNum))
    }

    const onPageChanged = (pageNumber) => {
        dispatch(getUsers(pageNumber, pageSize))
    }

    if (isFetching) return <Preloader/>

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

export default Users

