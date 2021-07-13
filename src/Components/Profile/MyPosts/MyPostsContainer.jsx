import {addPostAC, updateNewPostTextAC} from "../../../redux/ProfileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        p: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText,
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPostAC, updateNewPostTextAC}) (MyPosts);

export default MyPostsContainer;
