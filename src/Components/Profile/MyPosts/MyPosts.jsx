import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Click here</button>
            </div>
            <div className={s.posts}>
                <Post message='Where the detonator?!' likeCount='15'/>
                <Post message="You couldn't give it to an ordinary person in the crowd." likeCount='20'/>
            </div>
        </div>

    )
}

export default MyPosts;