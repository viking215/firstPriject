import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import s from './Dialogs.module.css'
import React from "react";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import SendIcon from '@mui/icons-material/Send';
import {Button} from "@mui/material";
import {useAppSelector} from "../../redux/redux-store";
import {actions} from "../../redux/DialogsReducer";

const Dialogs = () => {

    const dialogsPage = useAppSelector((state) => state.dialogsPage)

    const dispatch = useDispatch()

    let dialogsElements = dialogsPage.dialogsData
        .map(dialog => <DialogItem avatar={dialog.ava} name={dialog.name} key={dialog.id} id={dialog.id}/>);
    let messagesElements = dialogsPage.messagesData
        .map(message => <MessageItem text={message.text} key={message.id}/>);



    const onSubmit = (values: NewMesTextFormType) => {
        dispatch(actions.sendMes(values.newMessageText))
        setValue('newMessageText', '')
    }
    const {register, handleSubmit, setValue} = useForm()

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div className={s.mcont}>{messagesElements}</div>
                <div className={s.send}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <textarea cols={40} rows={2} {...register('newMessageText', {required: true, maxLength: 100})}
                                  autoComplete="off"/>
                        <Button className={s.sendBtn} type="submit" variant="contained" size="small"
                                endIcon={<SendIcon/>}>
                            Send
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;

type NewMesTextFormType = {
    newMessageText: string
}