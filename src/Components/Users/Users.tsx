import React, {useEffect, useState} from "react";
import User from "./User";
import {useDispatch} from "react-redux";
import {follow, getUsers, unfollow} from "../../redux/UsersReducer";
import Preloader from "../common/preloader/preloader";
import {PaginationMaterial} from "../../libs/PaginationMaterial";
import {useAppSelector} from "../../redux/redux-store";


const Users = () => {
    const [page, setPage] = useState(1)

    const pageSize = useAppSelector((state) => state.users.pageSize)
    const totalUsersCount = useAppSelector((state) => state.users.totalUsersCount)
    const isFetching = useAppSelector((state) => state.users.isFetching)
    const followingInProgress = useAppSelector((state) => state.users.followingInProgress)
    const users = useAppSelector((state) => state.users.users)


    useEffect(() => {
        dispatch(getUsers(page, pageSize))
    }, [])

    const dispatch = useDispatch()


    const onPageChanged = (pageNumber: number) => {
        setPage(pageNumber)
        dispatch(getUsers(pageNumber, pageSize))
    }
    const unfollowClick = (idNum: number) => {
        dispatch(unfollow(idNum))
    }

    const followClick = (idNum: number) => {
        dispatch(follow(idNum))
    }


    if (isFetching) return <Preloader/>

    return (
        <div>
            <PaginationMaterial onPageChanged={onPageChanged} pageSize={pageSize} totalUsersCount={totalUsersCount}
                                page={page}/>
            <div>
                { users.map(u => <User user={u} followingInProgress={followingInProgress}
                                               key={u.id} followClick={followClick} unfollowClick={unfollowClick}/>) }
            </div>
        </div>
    )
}

export default Users

