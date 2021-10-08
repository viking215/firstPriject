import s from './../Dialogs.module.css'

const MessageItem = (props) => {
    return (
        <div>
            <div style={{alignItems: props.isMy ? 'flex-end' : 'flex-start'}} className={s.mes}>
                {props.text}
            </div>

        </div>

    )
}

export default MessageItem;