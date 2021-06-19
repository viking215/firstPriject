import React from 'react'
import {addPost, updateNewPostText} from "../../../redux/ProfileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        p: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText,
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPost, updateNewPostText}) (MyPosts);

export default MyPostsContainer;