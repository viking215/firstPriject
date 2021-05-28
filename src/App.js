import './App.css';
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {Route} from "react-router-dom"
import Friends from "./Components/Friends/Friends";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import NavigationContainer from "./Components/Navigation/NavigationContainer";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavigationContainer />
            <div className='app-wrapper-content'>

                <Route path="/profile" render={() => <Profile />}/>

                <Route path="/messages" render={() => <DialogsContainer />}/>

                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
                <Route path="/friends" render={() => <Friends/>}/>
            </div>
        </div>

    );
}

export default App;
