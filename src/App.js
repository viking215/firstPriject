import './App.css';
import 'boxicons'
import {withRouter} from "react-router-dom"
import {Component} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./Components/common/preloader/preloader";
import ContextBody from "./Components/ContextBody/ContextBody";


class App extends Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) return <Preloader/>

        return (
            <div>
                <ContextBody />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})) (App);


/*
{isAuth
    ? <div><button onClick={() => dispatch(authLogout)}><box-icon name='log-out' size='sm'></box-icon>
        <div className={s.button_text}>Log out</div></button></div>
    : <button><NavLink to={'/login'}><box-icon name='log-in'></box-icon>
        <div className={s.button_text}>Log in</div></NavLink></button>
}*/




