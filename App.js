import React from 'react'
import { Provider } from 'react-redux'
import store from './src/store'
import FormContainer from './src/FormContainer'

const App = () => (
    <Provider store={store}>
        <FormContainer />
    </Provider>
)


export default App
