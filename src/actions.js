import { fetchQuery } from './server'
import { getSearchParameters } from './selectors'

export function loadingBegun() {
    return { type: 'LOADING_BEGUN' }
}

export function requestComplete(response) {
    return {
        type: 'REQUEST_COMPLETE',
        payload: response,
    }
}

export function requestError(errorMessage) {
    return {
        type: 'REQUEST_ERROR',
        payload: errorMessage,
    }
}


export function updateSearchTerm(searchTerm) {
    return {
        type: 'UPDATE_SEARCH_TERM',
        payload: searchTerm,
    }
}

export function submit() {
    const dispatchHandler = (dispatch, getState) => {
        const { app } = getState()
        if (app.status !== 'loading') {
            dispatch(loadingBegun())
            const params = getSearchParameters(app)
            return fetchQuery(params)
                .then((response) => {
                    dispatch(requestComplete(response))
                })
                .catch((error) => {
                    dispatch(requestError(error.message))
                })
        }
        return Promise.resolve()
    }
    return dispatchHandler
}
