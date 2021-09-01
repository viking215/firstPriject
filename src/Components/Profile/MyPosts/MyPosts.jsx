import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from 'react'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utilities/validation/validators";
import {Textarea} from "../../common/FormsControls/formsControls";

const maxLength15 = maxLengthCreator(15)

const addPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Add Post'}
                       name={'newPostText'}
                       component={Textarea}
                       validate={[required, maxLength15]}/>
                <button>Click here</button>
            </div>
        </form>

    )

}

const PostReduxForm = reduxForm({
    form: 'Post'
})(addPostForm)


const MyPosts = React.memo((props) => {
console.log("Hey")
    let postsElements = props.p
        .map(p => <Post message={p.text} likesCount={p.likesCount} key={p.id}/>);


    let addNewPost = (values) => {
        props.addPostAC(values.newPostText);
        }


    return (
        <div className={s.inf}>
            <h2>My posts</h2>
            <PostReduxForm onSubmit={addNewPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    )
})

export default MyPosts;