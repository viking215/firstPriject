import React from "react";
import {sendMesActionCreator, updateNewMessageActionCreator} from "../../redux/DialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState();

    let sendMes = () => {
        props.store.dispatch(sendMesActionCreator());
    }
    let onMesChange = (text) => {
        props.store.dispatch(updateNewMessageActionCreator(text));
    }
    return (
        <Dialogs dialogsPage={state.dialogsPage}
                 sendMes={sendMes}
                 updateNewMesText={onMesChange}
                 newMessageText={state.dialogsPage.newMessageText}/>
    )
}
export default DialogsContainer;