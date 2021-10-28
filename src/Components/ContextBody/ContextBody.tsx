import 'boxicons'
import React, {Suspense} from 'react'
import s from './contextBody.module.css'
import {NavLink, Route, Switch,} from "react-router-dom";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {authLogout} from "../../redux/authReducer";
import profileDef from '../../common/images/profileDef.png'
import Profile from "../Profile/Profile";
import {useAppSelector} from "../../redux/redux-store";
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import PeopleIcon from '@mui/icons-material/People';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';
import reactLogo from './../../assets/images/react-logo-36.png'
import {PrivateRoute} from "../common/PrivateRoute";

const Dialogs = React.lazy(() => import("../Dialogs/Dialogs"))
const Users = React.lazy(() => import("../Users/Users"))
const NewLogin = React.lazy(() => import("../Login/Login"))


const ContextBody = () => {
    const isAuth = useAppSelector(state => state.auth.isAuth)
    const login = useAppSelector(state => state.auth.login)
    const dispatch = useDispatch()

    const [shift, setShift] = useState(true)
    const shiftActivateBtn = () => {
        setShift(value => !value)
    }
    // @ts-ignore
    return (
        <div>
            <div>
                <div className={`${s.sidebar} ${shift ? '' : s.active}`}>
                    <div className={s.lg_content}>

                        <span className={s.lg_icon}><img src={reactLogo} alt="icon"/></span>
                        <span className={s.lg_name}>Name Field</span>
                    </div>
                    <div className={s.btn} onClick={shiftActivateBtn}>
                        <MenuIcon className={s.itemIcon}/>
                    </div>
                    <div className={s.items}>
                        <div className={s.item}>
                            <div className={s.search}>
                            <span className={s.search_icon} onClick={shiftActivateBtn}>
                                <SearchIcon className={s.itemIcon}/></span>
                                <input placeholder='Search...' className={s.input_search}/>
                            </div>
                            <span className={s.tooltip}>Search</span>
                        </div>
                        <div className={s.item}>
                            <NavLink to="/profile"><span className={s.icon}>
                        <PersonIcon className={s.itemIcon}/></span>
                                <span className={s.item_name}>Profile</span></NavLink>
                            <span className={s.tooltip}>Profile</span>
                        </div>
                        <div className={s.item}>
                            <NavLink to="/messages"><span className={s.icon}>
                        <ChatIcon className={s.itemIcon}/></span>
                                <span className={s.item_name}>Dialogs</span></NavLink>
                            <span className={s.tooltip}>Dialogs</span>
                        </div>
                        <div className={s.item}>
                            <NavLink to="/users"><span className={s.icon}>
                        <PeopleIcon className={s.itemIcon}/></span>
                                <span className={s.item_name}>Users</span></NavLink>
                            <span className={s.tooltip}>Users</span>
                        </div>
                        <div className={s.item}>
                            <NavLink to="/saved"><span className={s.icon}>
                        <FavoriteIcon className={s.itemIcon}/></span>
                                <span className={s.item_name}>Saved</span></NavLink>
                            <span className={s.tooltip}>Saved</span>
                        </div>
                        <div className={s.item}>
                            <NavLink to="/settings"><span className={s.icon}>
                        <SettingsIcon className={s.itemIcon}/></span>
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
                                    <LoginIcon className={s.itemIcon}/>
                                    <div className={s.button_name}>log out</div>
                                </div>
                            </button>
                        </div>
                        : <button><NavLink to={'/login'}>
                            <div className={s.button_log}>
                                <LogoutIcon className={s.itemIcon}/>
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

                    <Switch>
                        <PrivateRoute exact path="/profile" component={Profile} />
                        <Route exact path="/profile/:userId?" component={Profile}/>
                        <Suspense fallback={'loading'}>
                            <PrivateRoute path="/messages" component={Dialogs}/>
                            <Route path="/users" render={() => <Users/>}/>
                            <Route path="/login" render={() => <NewLogin/>}/>
                        </Suspense>
                    </Switch>

                </div>
            </div>
        </div>
    )
}

export default ContextBody