import React from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'
import { string, func } from 'prop-types'
import { MainAppText } from './style'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

const Form = ({
    lastResult,
    status,
    submit,
    updateZipCode,
    zipCode,
}) => (
    <View style={styles.container}>
        <MainAppText>Enter zip code:</MainAppText>
        <TextInput
            style={{ height: 40 }}
            placeholder="type here"
            value={zipCode}
            onChangeText={updateZipCode}
        />
        <Button onPress={submit} title="abc" />
        <MainAppText>{`your zip code is: ${zipCode}`}</MainAppText>
        <MainAppText>{`status: ${status}`}</MainAppText>
        <MainAppText>{`result: ${lastResult}`}</MainAppText>
    </View>
)

Form.propTypes = {
    lastResult: string.isRequired,
    status: string.isRequired,
    submit: func.isRequired,
    updateZipCode: func.isRequired,
    zipCode: string.isRequired,
}

export default Form
