import React from 'react'
import {Redirect, Route} from "react-router-dom";
import {RouteProps} from "react-router";
import {useAppSelector} from "../../redux/redux-store";


export const PrivateRoute = ({component: Component, ...rest}: RouteProps) => {
    const isAuth = useAppSelector(state => state.auth.isAuth)

    return (
        <Route
            {...rest}
            render={(props) => isAuth
                // @ts-ignore
                ? <Component {...props} />
                : <Redirect to={{pathname: '/login', state: {from: props.location}}}/>}
        />
    )
}