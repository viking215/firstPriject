import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/ProfileReducer";



const MyPosts = (props) => {

    let postsElements = props.p
        .map(p => <Post message={p.text} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={s.inf}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button className={s.but} onClick={addPost}>
                        Click here
                    </button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    )
}

export default MyPosts;