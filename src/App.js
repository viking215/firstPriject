import './App.css';
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import Profile from "./Components/Profile/Profile";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {Route} from "react-router-dom"
import Dialogs from "./Components/Dialogs/Dialogs";
import Friends from "./Components/Friends/Friends";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navigation state={props.state}/>
            <div className='app-wrapper-content'>
                <Route path="/profile" render={() =>
                    <Profile profilePage={props.state.profilePage}
                             dispatch={props.dispatch}/>}/>
                <Route path="/messages" render={() =>
                    <Dialogs dialogsPage={props.state.dialogsPage}
                             dispatch={props.dispatch}/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
                <Route path="/friends" render={() => <Friends
                    state={props.state}/>}/>
            </div>
        </div>

    );
}

export default App;
