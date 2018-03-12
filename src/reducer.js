const defaultState = {
    zipcode: '',
}

const reducer = (state = defaultState, action) => {
    // throw new Error(JSON.stringify(state))
    switch (action.type) {
    case 'UPDATE_ZIP_CODE':
        return {
            ...state,
            zipCode: action.payload,
        }
    default:
        return state
    }
}

export default reducer
