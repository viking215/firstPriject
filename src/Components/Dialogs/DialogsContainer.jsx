import React from "react";
import {sendMes, updateNewMessage} from "../../redux/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const DialogsContainer = connect(mapStateToProps, {
    sendMes,
    updateNewMessage,
})(Dialogs);

export default DialogsContainer;