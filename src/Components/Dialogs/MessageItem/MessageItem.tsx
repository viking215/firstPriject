import s from './../Dialogs.module.css'

const MessageItem = ({text}: { text: string }) => {
    return (
        <div>
            <div  className={s.mes}>
                {text}
            </div>

        </div>

    )
}

export default MessageItem;