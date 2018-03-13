import React from 'react'
import { Provider } from 'react-redux'
import {
    Keyboard,
    StyleSheet,
    TouchableWithoutFeedback,
    View,
} from 'react-native'
import store from './src/store'
import FormContainer from './src/FormContainer'
import ResultsContainer from './src/ResultsContainer'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
})

const MainContainer = () => (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
            <FormContainer />
            <ResultsContainer />
        </View>
    </TouchableWithoutFeedback>
)

const App = () => (
    <Provider store={store}>
        <MainContainer />
    </Provider>
)


export default App
