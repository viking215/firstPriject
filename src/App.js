import './App.css';
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






