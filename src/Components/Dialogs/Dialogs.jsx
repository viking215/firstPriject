import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import s from './Dialogs.module.css'
import React from "react";

const Dialogs = (props) => {


    let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem avatar={dialog.ava} name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.state.messagesData.map(message => <MessageItem text={message.text}/>);

    let newMessage = React.createRef()
    let sendMes = () => {
        let mes = newMessage.current.value
        alert(mes)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div className={s.mcont}>{messagesElements}</div>
                <div className={s.send}>
                    <textarea ref={newMessage}></textarea>
                    <button onClick={sendMes}>Send</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;