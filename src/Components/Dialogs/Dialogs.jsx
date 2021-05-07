import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const dialogsData = [
    {id: 1, name: 'Super Man'},
    {id: 2, name: 'Aqua Man'},
    {id: 3, name: 'Flash'},
    {id: 4, name: 'Wonder Woman'},
    {id: 5, name: 'Kiborg'},
]

const messagesData = [
    {id: 1, text: 'texttexttexttext'},
    {id: 2, text: 'texttext'},
    {id: 3, text: 'texttexttexttexttexttext'},
]

const Dialogs = (props) => {



    let dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = messagesData.map(message => <MessageItem text={message.text}/>);


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}
export default Dialogs;