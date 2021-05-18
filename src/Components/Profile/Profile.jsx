import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts p={props.state.postsData} addPost={props.addPost}/>
        </div>
    )
}

export default Profile;
