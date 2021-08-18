const SEND_MES = 'SEND-MES';

let initialDialogs = {
    dialogsData: [
        {
            id: 1,
            name: 'Super Man',
            ava: 'https://cdn2.iconfinder.com/data/icons/many-people-flat-icons/128/superman-512.png'
        },

    ],
    messagesData: [
        {id: 1, text: 'texttexttexttext'},
        {id: 2, text: 'texttext'},
        {id: 3, text: 'texttexttexttexttexttext'},
    ],
};
const dialogsReducer = (state = initialDialogs, action) => {

    switch (action.type) {
        case SEND_MES:
            let newMessage = action.payload
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 7, text: newMessage}],
            }
        default:
            return state;
    }
}
export const sendMes = (newMessageText) => ({type: SEND_MES, payload: newMessageText});

export default dialogsReducer;