import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'/>
            <span className={s.text}>{props.message}</span>
            <div className={s.likes}>
                <span>Likes:</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;