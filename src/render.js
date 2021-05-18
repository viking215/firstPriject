import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {addPost} from "./redux/State";

export let renderEntireTree = (State) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={State} addPost={addPost}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}


reportWebVitals();
