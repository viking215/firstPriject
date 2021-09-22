import s from './Navigation.module.css'
import {NavLink} from "react-router-dom";
import FriendsItem from "../Friends/FriendsItem/FriendsItem";
import 'boxicons'

const Navigation = (props) => {
 /*   let friendBlock = props.sidebarPage.friends.map(friend =>
        <FriendsItem avatar={friend.ava} name={friend.name} id={friend.id} key={friend.id}/>)*/
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
                <box-icon name="rocket">123</box-icon>
            </div>
            <div className={s.item}>
                <NavLink to="/messages" activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/friends" activeClassName={s.active}>Friends</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
            </div>
            <div className={s.friends}>
                {/*<div className={s.head}>
                    <NavLink to="/friends" activeClassName={s.active}>Friends</NavLink>
                </div>*/}
                {/*<div className={s.name}>
                    {friendBlock}
                </div>*/}
            </div>
        </nav>
    )
}

export default Navigation;