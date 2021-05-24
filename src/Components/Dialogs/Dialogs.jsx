import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import s from './Dialogs.module.css'
import React from "react";
import {sendMesActionCreator, updateNewMessageActionCreator} from "../../redux/Store";




const Dialogs = (props) => {


    let dialogsElements = props.dialogsPage.dialogsData.map(dialog => <DialogItem avatar={dialog.ava} name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.dialogsPage.messagesData.map(message => <MessageItem text={message.text}/>);

    let newMessage = React.createRef()
    let sendMes = () => {
        props.dispath(sendMesActionCreator());
    }
    let onMesChange = () => {
        let text = newMessage.current.value;
        props.dispath(updateNewMessageActionCreator(text));
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div className={s.mcont}>{messagesElements}</div>
                <div className={s.send}>
                    <textarea onChange={onMesChange} ref={newMessage} value={props.dialogsPage.newMessageText}/>
                    <button onClick={sendMes}>Send</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;