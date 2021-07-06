const ADD_POST = 'ADD-POST';
const U_N_P_T = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        {id: 1, text: 'I am Batman', likesCount: 44},
        {id: 1, text: 'Where the detonator?!', likesCount: 15},
        {id: 2, text: "You couldn't give it to an ordinary person in the crowd.", likesCount: 25},
    ],
    newPostText: ""
}
const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {

            let newPost = {id: 5, text: state.newPostText, likesCount: 0,}
            return {
                ...state,
                newPostText: '',
                postsData: [...state.postsData, newPost]
            }
        }
        case U_N_P_T: {
            return {
                ...state,
                newPostText: action.newText,
            };
        }
        default:
            return state;
    }
    return state;}

export const addPost = () => ({type: ADD_POST})
export const updateNewPostText = (text) => ({type: U_N_P_T, newText: text,});

export default profileReducer;