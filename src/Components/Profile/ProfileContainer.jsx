import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/ProfileReducer";
import {withRouter} from "react-router-dom";
import usersAPI from "../../api/api";

class ProfileContainer extends React.Component {

    componentDidMount() {
        debugger

        usersAPI.getProfile(this.props.match.params.userId).then(data => {

            this.props.setUserProfile(data);
        })
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


export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent)
