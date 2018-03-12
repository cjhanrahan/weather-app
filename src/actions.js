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

export function requestError(errorMessage) {
    return {
        type: 'REQUEST_ERROR',
        payload: errorMessage,
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
        const { status, zipCode } = getState().app
        if (status !== 'loading') {
            dispatch(loadingBegun())
            return fetchQuery({ zip: zipCode })
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
