import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'/>
            <span className={s.text}>{props.message}</span>
            <div className={s.likes}>
                <span>Likes:    {props.likesCount}       <img src='https://toppng.com/uploads/preview/like-heart-11551048696fib6y57o3r.png'/></span>
            </div>
        </div>
    )
}

export default Post;