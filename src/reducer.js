import { combineReducers } from 'redux'

export const defaultState = {
    status: 'idle',
    zipCode: '',
    lastResult: {},
}

export const app = (state = defaultState, action) => {
    switch (action.type) {
    case 'LOADING_BEGUN':
        return {
            ...state,
            status: 'loading',
        }
    case 'REQUEST_COMPLETE':
        return {
            ...state,
            status: 'idle',
            lastResult: action.payload,
        }
    case 'REQUEST_ERROR':
        return {
            ...state,
            status: 'error',
            lastResult: action.payload,
        }
    case 'UPDATE_ZIP_CODE':
        return {
            ...state,
            zipCode: action.payload,
        }
    default:
        return state
    }
}

const reducer = combineReducers({ app })

export default reducer
