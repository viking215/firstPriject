import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile, getProfile, getStatus, updateStatus} from "../../redux/ProfileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


const ProfileContainer = (props) =>  {


    useEffect(() => {
        const userId = props.match.params.userId || props.authorizedUserId

        props.getProfile(userId)
        props.getStatus(userId)
    }, [])


        return (
            <div>
                <Profile {...props} />
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
    connect(mapStateToProps, {setUserProfile, getProfile, getStatus, updateStatus}),
    withAuthRedirect,
    withRouter,
)(ProfileContainer)

