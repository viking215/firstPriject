import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    togleIsFetching,
    unfollow
} from "../../redux/FriendsReducer";
import * as axios from "axios";
import Friends from "./Friends";
import Preloader from "../common/preloader/preloader";


class FriendsContainer extends React.Component {

    componentDidMount() {
        this.props.togleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.togleIsFetching(false)
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.togleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.togleIsFetching(false)
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Friends totalUsersCount={this.props.totalUsersCount}
                     pageSize={this.props.pageSize}
                     currentPage={this.props.currentPage}
                     friendsData={this.props.friendsData}
                     onPageChanged={this.onPageChanged}
                     follow={this.props.follow}
                     unfollow={this.props.unfollow}
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
    }
}
export default connect(mapStateToProps,{follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, togleIsFetching,})(FriendsContainer);
