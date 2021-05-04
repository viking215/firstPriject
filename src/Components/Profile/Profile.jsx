import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src='https://images.pexels.com/photos/255419/pexels-photo-255419.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'/>
            </div>
            <div>
                ava + descr
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;