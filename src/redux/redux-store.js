import {combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import {sidebarReducer} from "./SidebarReducer";
import friendsReducer from "./FriendsReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    friendsData: friendsReducer,
    auth: authReducer
})

let store = createStore(reducers);

export default store