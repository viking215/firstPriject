import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import s from './Dialogs.module.css'
import React from "react";

const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogsData.map(dialog => <DialogItem avatar={dialog.ava} name={dialog.name} key={dialog.id} id={dialog.id}/>);
    let messagesElements = state.messagesData.map(message => <MessageItem text={message.text} key={message.id}/>);

    let newMessage = React.createRef()
    let sendMes = () => {
        props.sendMes();
    }
    let onMesChange = () => {
        let text = newMessage.current.value;
        props.updateNewMessage(text);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div className={s.mcont}>{messagesElements}</div>
                <div className={s.send}>
                    <textarea onChange={onMesChange} ref={newMessage} value={state.newMessageText}/>
                    <button onClick={sendMes}>Send</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;