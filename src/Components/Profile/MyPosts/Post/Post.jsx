import s from './Post.module.css'
import profileDef from '../../../../common/images/profileDef.png'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src={profileDef}/>
            <span className={s.text}>{props.message}</span>
            <div className={s.likes}>
                <span>Likes:    {props.likesCount}       <img src='https://toppng.com/uploads/preview/like-heart-11551048696fib6y57o3r.png'/></span>
            </div>
        </div>
    )
}

export default Post;