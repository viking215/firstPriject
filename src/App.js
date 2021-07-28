import './App.css';
import HeaderContainer from "./Components/Header/HeaderContainer";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {Route} from "react-router-dom"
import FriendsContainer from "./Components/Friends/FriendsContainer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import NavigationContainer from "./Components/Navigation/NavigationContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import Login from "./Components/Login/Login";

const App = () => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <NavigationContainer />
            <div className='app-wrapper-content'>

                <Route path="/profile/:userId?" render={() => <ProfileContainer />}/>

                <Route path="/messages" render={() => <DialogsContainer />}/>

                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>

                <Route path="/friends" render={() => <FriendsContainer/>}/>
                <Route path="/login" render={() => <Login />}/>
            </div>
        </div>

    );
}

export default App;
