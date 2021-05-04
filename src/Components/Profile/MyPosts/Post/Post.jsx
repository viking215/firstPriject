import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'/>
            {props.message}
            <div>
               <span>Likes:</span> {props.likeCount}
            </div>
        </div>
    )
}

export default Post;