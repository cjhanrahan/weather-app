import { combineReducers } from 'redux'

export const defaultState = {
    status: 'idle',
    searchTerm: '94040',
    lastResult: {},
    lastErrorMessage: null,
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
            lastErrorMessage: action.payload,
        }
    case 'UPDATE_SEARCH_TERM':
        return {
            ...state,
            searchTerm: action.payload,
        }
    default:
        return state
    }
}

const reducer = combineReducers({ app })

export default reducer
