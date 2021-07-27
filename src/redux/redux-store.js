import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import sidebarReducer from "./SidebarReducer";
import friendsReducer from "./FriendsReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    friendsData: friendsReducer,
    auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store