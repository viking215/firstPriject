import {NavLink} from "react-router-dom";
import s from "./FriendsItem.module.css"

const FriendsItem = (props) => {
    let path = "/friends" + props.id;

    return (
        <div className={s.all}>
            <NavLink to={path}><span className={s.one}><img className={s.image} src={props.avatar}/></span><span className={s.name}> {props.name}</span>
            </NavLink>
        </div>
    )
}

export default FriendsItem