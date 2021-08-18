import React from "react";
import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage, toggleFollowingProgress,
    unfollow,
} from "../../redux/FriendsReducer";
import Friends from "./Friends";
import Preloader from "../common/preloader/preloader";
import {compose} from "redux";
import {
    CurrentPage,
    FollowingInProgress, FrieendsData,
    IsFetching,
    PageSize,
    TotalUsersCount
} from "../../redux/Friends-selector";


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

/*const mapStateToProps = (state) => {

     return {
        friendsData: state.friendsData.friendsData,
        pageSize: state.friendsData.pageSize,
        totalUsersCount: state.friendsData.totalUsersCount,
        currentPage: state.friendsData.currentPage,
        isFetching: state.friendsData.isFetching,
        followingInProgress: state.friendsData.followingInProgress,
    }
}*/
const mapStateToProps = (state) => {

    return {
        friendsData: FrieendsData(state),
        pageSize: PageSize(state),
        totalUsersCount: TotalUsersCount(state),
        currentPage: CurrentPage(state),
        isFetching: IsFetching(state),
        followingInProgress: FollowingInProgress(state),
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
    /*withAuthRedirect,*/
)(FriendsContainer)


