import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from 'react'
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {actions} from "../../../redux/ProfileReducer";
import {useAppSelector} from "../../../redux/redux-store";
import {PostsDataType} from "../../../Types/UnionTypes";



const MyPosts = React.memo(() => {

    const p = useAppSelector((state) => state.profilePage.postsData)

    const dispatch = useDispatch()


    let postsElements = p.map((p: PostsDataType )=> <Post key={p.id} message={p.text} likesCount={p.likesCount} />);


    type ValuesType = {
        newPostText: string
    }
    let addNewPost = (values:ValuesType) => {
        dispatch(actions.addPostAC(values.newPostText));
        setValue('newPostText', '')
    }

    const {register, handleSubmit, setValue} = useForm()


    return (
        <div className={s.inf}>
            <h2>My posts</h2>
            <form onSubmit={handleSubmit(addNewPost)}>
                <textarea  {...register('newPostText', {required: true, maxLength: 100})}
    autoComplete="off"/>
                <input type="submit"/>
            </form>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    )
})

export default MyPosts;