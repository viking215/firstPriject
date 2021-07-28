import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile, getProfile, getStatus, updateStatus} from "../../redux/ProfileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {


    componentDidMount() {
        /*let userId = this.props.match.params.userId*/
        this.props.getProfile(this.props.match.params.userId)
        this.props.getStatus(this.props.match.params.userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                         updateStatus={this.props.updateStatus}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
})

export default compose(
    connect(mapStateToProps, {setUserProfile, getProfile, getStatus, updateStatus}),
    withAuthRedirect,
    withRouter,
)(ProfileContainer)

