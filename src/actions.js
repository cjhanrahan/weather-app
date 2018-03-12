import { fetchQuery } from './server'

export function loadingBegun() {
    return { type: 'LOADING_BEGUN' }
}

export function requestComplete(response) {
    return {
        type: 'REQUEST_COMPLETE',
        payload: response,
    }
}

export function requestError(error) {
    return {
        type: 'REQUEST_ERROR',
        payload: error,
    }
}


export function updateZipCode(zipCode) {
    return {
        type: 'UPDATE_ZIP_CODE',
        payload: zipCode,
    }
}

export function submit() {
    const dispatchHandler = (dispatch, getState) => {
        if (getState().app.status !== 'loading') {
            dispatch(loadingBegun)
            return fetchQuery()
                .then((response) => {
                    dispatch(requestComplete(response))
                })
                .catch((error) => {
                    dispatch(requestError(error))
                    throw error
                })
        }
    }
    return dispatchHandler
}
