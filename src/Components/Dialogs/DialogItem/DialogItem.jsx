import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/messages/" + props.id;
    return <div className={s.dialog}>
        <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
    </div>
}


export default DialogItem;