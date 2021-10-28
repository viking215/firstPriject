import s from './Post.module.css'
import profileDef from '../../../../common/images/profileDef.png'

type PropsType = {
    message: string
    likesCount: number
}

const Post = ({message, likesCount}:PropsType) => {
    return (
        <div className={s.item}>
            <img
                src={profileDef}/>
            <span className={s.text}>{message}</span>
            <div className={s.likes}>
                <span>Likes:    {likesCount}       <img src='https://toppng.com/uploads/preview/like-heart-11551048696fib6y57o3r.png'/></span>
            </div>
        </div>
    )
}

export default Post;