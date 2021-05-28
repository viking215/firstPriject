import s from './Navigation.module.css'
import {NavLink} from "react-router-dom";
import FriendsItem from "../Friends/FriendsItem/FriendsItem";

const Navigation = (props) => {
    let friendBlock = props.sidebarPage.friends.map(friend =>
        <FriendsItem avatar={friend.ava} name={friend.name} id={friend.id} key={friend.id}/>)
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/messages" activeClassName={s.active}>Messages</NavLink>
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
                <div className={s.head}>Friends</div>
                <div className={s.name}>
                    {friendBlock}
                </div>
            </div>
        </nav>
    )
}

export default Navigation;