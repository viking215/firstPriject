import React from "react";
import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage, toggleFollowingProgress,
    unfollow,
} from "../../redux/FriendsReducer";
import Friends from "./Friends";
import Preloader from "../common/preloader/preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class FriendsContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    unfollowClick = (idNum) => {
        this.props.unfollow(idNum)
    }

    followClick = (idNum) => {
        this.props.follow(idNum)
    }


    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Friends {...this.props}
                     onPageChanged={this.onPageChanged}
                     unfollowClick={this.unfollowClick}
                     followClick={this.followClick}
            />
        </>
    }
}

const mapStateToProps = (state) => {

     return {
        friendsData: state.friendsData.friendsData,
        pageSize: state.friendsData.pageSize,
        totalUsersCount: state.friendsData.totalUsersCount,
        currentPage: state.friendsData.currentPage,
        isFetching: state.friendsData.isFetching,
        followingInProgress: state.friendsData.followingInProgress,
    }
}


export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers,
    }),
    withAuthRedirect,
) (FriendsContainer)


