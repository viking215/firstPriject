import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import s from './Dialogs.module.css'
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utilities/validation/validators";
import {Textarea} from "../common/FormsControls/formsControls";


const maxLength100 = maxLengthCreator(100)

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'^-^'}
                       component={Textarea}
                       name={'newMessageText'}
                       validate={[required, maxLength100]}/>
                <button>Send</button>
            </div>
        </form>
    )
}

const MessageReduxForm = reduxForm({
    form: 'message'
})(MessageForm)

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogsData
        .map(dialog => <DialogItem avatar={dialog.ava} name={dialog.name} key={dialog.id} id={dialog.id}/>);
    let messagesElements = props.dialogsPage.messagesData
        .map(message => <MessageItem text={message.text} key={message.id}/>);


    const addNewMessage = (values) => {
        props.sendMes(values.newMessageText)
    }
    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div className={s.mcont}>{messagesElements}</div>
                <div className={s.send}>
                    <MessageReduxForm onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;