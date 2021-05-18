import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from 'react'


const MyPosts = (props) => {

    let postsElements = props.p
        .map(p => <Post message={p.text} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value
        props.addPost(text)
        newPostElement.current.value = '';
    }

    return (
        <div className={s.inf}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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