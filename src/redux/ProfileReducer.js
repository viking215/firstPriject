const ADD_POST = 'ADD-POST';
const U_N_P_T = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {

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

export default profileReducer;