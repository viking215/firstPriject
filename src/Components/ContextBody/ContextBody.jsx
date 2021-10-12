import 'boxicons'
import React, {Suspense} from 'react'
import s from './contextBody.module.css'
import {NavLink, Redirect, Route,} from "react-router-dom";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {authLogout} from "../../redux/authReducer";
import profileDef from '../../common/images/profileDef.png'
import Profile from "../Profile/Profile";

const Dialogs = React.lazy(() => import("./../Dialogs/Dialogs"))
const Users = React.lazy(() => import("../Users/Users"))
const Login = React.lazy(() => import("../Login/Login"))

const ContextBody = (props) => {
    const isAuth = useSelector(state => state.auth.isAuth)
    const login = useSelector(state => state.auth.login)
    const dispatch = useDispatch()

    const [shift, setShift] = useState(true)
    const shiftActivateBtn = () => {
        setShift(value => !value)
    }
    return (
        <div>
            <div>
                <div className={`${s.sidebar} ${shift ? '' : s.active}`}>
                    <div className={s.lg_content}>
                    <span className={s.lg_icon}><box-icon type='logo' name='react' color='#655a3d'
                                                          size='md'></box-icon></span>
                        <span className={s.lg_name}>Name Field</span>
                    </div>
                    <div className={s.btn} onClick={shiftActivateBtn}>
                        <box-icon name='menu' color='white'></box-icon>
                    </div>
                    <div className={s.items}>
                        <div className={s.item}>
                            <div className={s.search}>
                            <span className={s.search_icon} onClick={shiftActivateBtn}>
                                <box-icon name='search-alt' color='white'></box-icon></span>
                                <input placeholder='Search...' className={s.input_search}/>
                            </div>
                            <span className={s.tooltip}>Search</span>
                        </div>
                        <div className={s.item}>
                            <NavLink to="/profile"><span className={s.icon}>
                        <box-icon name='user-circle' color='grey'
                                  animation='tada-hover'></box-icon></span>
                                <span className={s.item_name}>Profile</span></NavLink>
                            <span className={s.tooltip}>Profile</span>
                        </div>
                        <div className={s.item}>
                            <NavLink to="/messages"><span className={s.icon}>
                        <box-icon name='chat' color='grey' animation='tada-hover'></box-icon></span>
                                <span className={s.item_name}>Dialogs</span></NavLink>
                            <span className={s.tooltip}>Dialogs</span>
                        </div>
                        <div className={s.item}>
                            <NavLink to="/users"><span className={s.icon}>
                        <box-icon name='user' color='grey' animation='tada-hover'></box-icon></span>
                                <span className={s.item_name}>Users</span></NavLink>
                            <span className={s.tooltip}>Users</span>
                        </div>
                        <div className={s.item}>
                            <NavLink to="/saved"><span className={s.icon}>
                        <box-icon name='heart' color='grey' animation='tada-hover'></box-icon></span>
                                <span className={s.item_name}>Saved</span></NavLink>
                            <span className={s.tooltip}>Saved</span>
                        </div>
                        <div className={s.item}>
                            <NavLink to="/settings"><span className={s.icon}>
                        <box-icon name='cog' color='grey' animation='tada-hover'></box-icon></span>
                                <span className={s.item_name}>Settings</span></NavLink>
                            <span className={s.tooltip}>Settings</span>
                        </div>
                    </div>
                    <div className={s.profile_content}>
                        <div className={s.profile}>
                            {isAuth
                                ? <div className={s.profile_details}><img src={profileDef}/>
                                    <div className={s.name_job}>
                                        <div className={s.name}>{login}</div>
                                        <div className={s.job}>Web developer</div>
                                    </div>
                                </div>
                                : <></>}

                            <span className={s.loginBlock}>
                    {isAuth
                        ? <div>
                            <button onClick={() => dispatch(authLogout)}>
                                <div className={s.button_log}>
                                    <box-icon name='log-out' color='gray'></box-icon>
                                    <div className={s.button_name}>log out</div>
                                </div>
                            </button>
                        </div>
                        : <button><NavLink to={'/login'}>
                            <div className={s.button_log}>
                                <box-icon name='log-in' color='gray'></box-icon>
                                <div className={s.button_name}>log in</div>
                            </div>
                        </NavLink></button>}
            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${s.home_content} ${shift ? '' : s.active_home}`}>
                <div className={s.components}>
                    <Route exact path="/" render={() => <Profile/>}/>
                    <Redirect from="/" to="/profile"/>
                    <Route path="/profile/:userId?" render={() => <Profile/>}/>
                    <Suspense fallback={'loading'}>
                        <Route path="/messages" render={() => <Dialogs/>}/>
                        <Route path="/users" render={() => <Users/>}/>
                        <Route path="/login" render={() => <Login/>}/>
                    </Suspense>
                </div>
            </div>
        </div>
    )
}

export default ContextBody