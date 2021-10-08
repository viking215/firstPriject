import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile, getProfile, getStatus, updateStatus, savePhoto, saveProfile} from "../../redux/ProfileReducer";
import {useHistory, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


const ProfileContainer = (props) =>  {
  /* const history = useHistory();
   console.log(history)

*/
    useEffect(() => {
        const userId = props.match.params.userId || props.authorizedUserId
        props.getProfile(userId)
        props.getStatus(userId)
    }, [props.match.params.userId])


        return (
            <div>
                <Profile {...props} isOwner={props.match.params.userId}
                savePhoto={props.savePhoto}/>
            </div>
        )
    }


const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
})

export default compose(
    connect(mapStateToProps, {setUserProfile, getProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withAuthRedirect,
    withRouter,
)(ProfileContainer)

