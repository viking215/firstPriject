const ADD_POST = 'ADD-POST';
const U_N_P_T = 'UPDATE-NEW-POST-TEXT';
const SEND_MES = 'SEND-MES';
const U_N_M = 'UPDATE-NEW-MESSAGE';

let Store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, text: 'I am Batman', likesCount: 44},
                {id: 1, text: 'Where the detonator?!', likesCount: 15},
                {id: 2, text: "You couldn't give it to an ordinary person in the crowd.", likesCount: 25},
            ],
            newPostText: ""
        },
        dialogsPage: {
            dialogsData: [
                {
                    id: 1,
                    name: 'Super Man',
                    ava: 'https://cdn2.iconfinder.com/data/icons/many-people-flat-icons/128/superman-512.png'
                },
                {id: 2, name: 'Aqua Man', ava: 'https://avatarfiles.alphacoders.com/197/197114.jpg'},
                {
                    id: 3,
                    name: 'Flash',
                    ava: 'https://previews.123rf.com/images/illustratiostock/illustratiostock1708/illustratiostock170800175/83219211-isolated-avatar-of-flash-on-a-white-background-vector-illustration.jpg'
                },
                {
                    id: 4,
                    name: 'Wonder Woman',
                    ava: 'data:image/png;base64,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'
                },
                {id: 5, name: 'Kiborg', ava: 'https://img.icons8.com/color/452/cyborg.png'},
            ],
            messagesData: [
                {id: 1, text: 'texttexttexttext'},
                {id: 2, text: 'texttext'},
                {id: 3, text: 'texttexttexttexttexttext'},
            ],
            newMessageText: "",
        },
        sidebarPage: {
            friends: [
                {
                    id: 1,
                    name: 'Joker',
                    ava: 'https://images.cdn3.stockunlimited.net/preview1300/joker-avatar_1320501.jpg',
                },
                {
                    id: 2,
                    name: 'Harle',
                    ava: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/suicide_squad_woman_avatar_joker-512.png',
                },
                {
                    id: 3,
                    name: 'Pingu',
                    ava: 'https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Penguin-512.png',
                },
            ]
        },
    },
    _callSubscriber() {
        console.log('state');
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispath(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {id: 5, text: this._state.profilePage.newPostText, likesCount: 0,};
            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state)
        }
        else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        }
        else if (action.type === 'SEND-MES') {
            let count = 0
            const isMy = (count % 2 === 0)
            count += 1;
            let newMessage = {
                id: 4, text: this._state.dialogsPage.newMessageText, isMy,
            };
            this._state.dialogsPage.messagesData.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state)
        }
        else if (action.type === 'UPDATE-NEW-MESSAGE') {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state)
        }
    }
}

export const addPostActionCreator = () =>({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: U_N_P_T, newText: text,});
export const sendMesActionCreator = () => ({type: SEND_MES});
export const updateNewMessageActionCreator = (text) =>({type: U_N_M, newText: text});

export default Store;
window.Store = Store;