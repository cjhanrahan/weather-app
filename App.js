import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './src/reducer'
import Form from './src/Form'
// import FormContainer from './src/FormContainer'

const store = createStore(reducer)


const App = () => (
    <Provider store={store}>
        <Form zipCode="123" onChangeZipCode={() => {}} />
    </Provider>
)


export default App
