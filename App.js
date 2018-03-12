import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { MainAppText } from './src/style/text'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

const App = () => (
    <View style={styles.container}>
        <MainAppText>Enter zip code</MainAppText>
        <TextInput
            style={{ height: 40 }}
            placeholder="type here"
        />
        <MainAppText>abc 123</MainAppText>
    </View>
)


export default App
