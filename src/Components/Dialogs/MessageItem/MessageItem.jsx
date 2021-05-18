import s from './../Dialogs.module.css'

const MessageItem = (props) => {
    let textElement
    return (
        <div>
            <div className={s.mes}>
                {props.text}
            </div>

        </div>

    )
}

export default MessageItem;