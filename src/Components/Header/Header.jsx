import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.upper}>
                <img
                    src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png'/>
                <span className={s.name}>Hi, i'm messager</span>
                <span className={s.loginBlock}>
                    {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}

            </span>
            </div>

        </header>
    )
}

export default Header;