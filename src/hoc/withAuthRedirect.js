import {Redirect} from "react-router-dom";
import React from "react";
import {connect, useSelector} from "react-redux";

const mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth,
})

export const withAuthRedirect = (Component) => {                                                                        // нужно еще поработать с хуком и убрать тут все
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to="/login"/>
            return <Component {...this.props}/>
        }
    }


    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent
}


export const useAuth = (Component) => {
    const isAuth = useSelector((state) => state.auth.isAuth)
    if (isAuth) return <Redirect to="/login"/>
}