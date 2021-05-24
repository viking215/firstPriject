import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts p={props.profilePage.postsData}
                     newPostText={props.profilePage.newPostText}
                     dispath={props.dispath}/>

        </div>
    )
}

export default Profile;
