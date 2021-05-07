import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let postsData = [
        {id: 1, text: 'Where the detonator?!', likesCount: 15},
        {id: 2, text: "You couldn't give it to an ordinary person in the crowd.", likesCount: 25},
    ]

    let postsElements = postsData.map( p => <Post message={p.text} likesCount={p.likesCount}/>);

    return (
        <div className={s.inf}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Click here</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    )
}

export default MyPosts;