import {InferActionsTypes} from "./redux-store";



type DialogsDataType = {
    id: number
    name: string
    ava: string
}
type MessagesDataType = {
    id: number
    text: string
}
let initialDialogs = {
    dialogsData: [
        {
            id: 1,
            name: 'Dude1',
            ava: 'https://cdn2.iconfinder.com/data/icons/many-people-flat-icons/128/superman-512.png'
        },

    ] as Array<DialogsDataType>,
    messagesData: [
        {id: 1, text: 'texttexttexttext'},
        {id: 2, text: 'texttexttexttext'},
    ] as Array<MessagesDataType>,
};

export type InitialDialogsType = typeof initialDialogs



const dialogsReducer = (state = initialDialogs,
                        action: ActionsTypes): InitialDialogsType => {
    switch (action.type) {
        case 'SEND-MES':
            let newMessage = action.payload
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 7, text: newMessage}],
            }
        default:
            return state;
    }
}

type ActionsTypes = InferActionsTypes<typeof actions>
/*type ThunkType = BaseThunkType<ActionsTypes>
type DispatchType = Dispatch<ActionsTypes>*/

export const actions = {
    sendMes: (newMessageText: string) => ({type: 'SEND-MES', payload: newMessageText}),
}



export default dialogsReducer;