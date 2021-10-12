import './App.css';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./Components/common/preloader/preloader";
import ContextBody from "./Components/ContextBody/ContextBody";


const App = () => {

    const initialized = useSelector((state) => state.app.initialized);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initializeApp())
    }, [])

        if (!initialized) return <Preloader/>

        return (
            <div>
                <ContextBody />
            </div>
        );

}



export default App






