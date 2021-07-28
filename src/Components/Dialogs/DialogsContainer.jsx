import React from "react";
import {sendMes, updateNewMessage} from "../../redux/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";




const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}



export default compose(
    connect(mapStateToProps, {sendMes, updateNewMessage,}),
    withAuthRedirect,
) (Dialogs)

