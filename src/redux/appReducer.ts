import {authMe} from "./authReducer";

let initialState = {
    initialized: false,
}
export type InitialStateType = typeof initialState

const appReducer = (state = initialState, action: InitializedSuccessActionType): InitialStateType => {

    switch (action.type) {
        case 'SET_INITIALIZED':
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export type InitializedSuccessActionType = { type: 'SET_INITIALIZED' }
export const initializedSuccess = (): InitializedSuccessActionType => ({type: 'SET_INITIALIZED'})

export const initializeApp = () => {
    return (dispatch: any) => {
        let promise = dispatch(authMe());
        Promise.all([promise])
            .then(() => {
                dispatch(initializedSuccess())
            })
    }
}

export default appReducer;