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
        case ADD_POST:
          let newPost = {id: 5, text: state.newPostText, likesCount: 0,};
            state.postsData.push(newPost)
            state.newPostText = '';
            return state;
        case U_N_P_T:
            state.newPostText = action.newText;
            return state;
        default: return state;
    }

    return state;
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: U_N_P_T, newText: text,});

export default profileReducer;