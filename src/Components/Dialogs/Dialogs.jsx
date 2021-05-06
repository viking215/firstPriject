import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/messages/1">Super Man</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/messages/2">Aqua Man</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/messages/3">Flash</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/messages/4">Wonder Woman</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/messages/5">Kiborg</NavLink>
                </div>

            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Lorem ipsum dolor sit amet.
                </div>
                <div className={s.message}>
                    Lorem ipsum dolor sit.
                </div>
                <div className={s.message}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </div>
            </div>
        </div>
    )
}
export default Dialogs;