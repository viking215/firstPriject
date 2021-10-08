import profileReducer, {addPostAC, deletePost} from "./ProfileReducer";
import React from 'react'

let state = {
    postsData: [
        {id: 1, text: 'I am Batman', likesCount: 44},
        {id: 2, text: 'Where the detonator?!', likesCount: 15},
    ],
}

it('new post should be added', () => {
    let action = addPostAC('Hello, world!')

    const lastElement = state.postsData.length
    let newState = profileReducer(state, action)

    expect(newState.postsData.length).toBe(lastElement +1)
})

it('message of new post text', () => {
    let action = addPostAC('Hello, world!')

    const lastElement = state.postsData.length
    let newState = profileReducer(state, action)

    expect(newState.postsData[lastElement].text).toBe('Hello, world!')
})

it('after deleting length of messages should be decrement', () => {
    let action = deletePost(1)

    const lastElement = state.postsData.length
    let newState = profileReducer(state, action)

    expect(newState.postsData.length).toBe(lastElement -1)
})
