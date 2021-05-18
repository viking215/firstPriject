import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.upper}>
                <img
                    src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png'/>
            <span>Hi, i'm messager</span>
            </div>
        </header>
    )
}

export default Header;