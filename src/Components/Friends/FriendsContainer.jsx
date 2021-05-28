import React from "react";
import Friends from "./Friends";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/FriendsReducer";

let mapStateToProps = (state) => {
    return {
        friendsData: state.friendsData.friendsData
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
    }
}





const FriendsContainer = connect(mapStateToProps, mapDispatchToProps) (Friends);

export default FriendsContainer;