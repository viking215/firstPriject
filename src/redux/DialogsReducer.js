const SEND_MES = 'SEND-MES';
const U_N_M = 'UPDATE-NEW-MESSAGE';

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case SEND_MES:
        let count = 0
        const isMy = (count % 2 === 0)
        count += 1;
        let newMessage = {
            "id": 4, "text": state.newMessageText, isMy,
        };
        state.messagesData.push(newMessage);
        state.newMessageText = '';
        return state;
        case U_N_M:
        state.newMessageText = action.newText;
        return state;
        default: return state;
    }

}

export default dialogsReducer;