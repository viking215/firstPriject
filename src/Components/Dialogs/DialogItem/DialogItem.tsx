import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    id: number
    avatar: string
    name: string
}

const DialogItem = ({id, avatar, name}: DialogItemPropsType) => {
    let path = "/messages/" + id;
    return <div className={s.dialog}>
        <NavLink to={path} activeClassName={s.active}><span className={s.pad}><img className={s.image} src={avatar}/></span> {name}</NavLink>
    </div>
}


export default DialogItem;