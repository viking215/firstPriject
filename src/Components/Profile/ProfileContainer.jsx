import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile, getProfile} from "../../redux/ProfileReducer";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getProfile(this.props.match.params.userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

const withUrlDataContainerComponent = withRouter(ProfileContainer);


export default connect(mapStateToProps, {setUserProfile, getProfile,})(withUrlDataContainerComponent)
