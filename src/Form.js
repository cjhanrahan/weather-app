import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
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
    zipCode,
    onChangeZipCode,
}) => (
    <View style={styles.container}>
        <MainAppText>Enter zip code:</MainAppText>
        <TextInput
            style={{ height: 40 }}
            placeholder="type here"
            value={zipCode}
            onChange={onChangeZipCode}
        />
        <MainAppText>abc 123</MainAppText>
    </View>
)

Form.propTypes = {
    zipCode: string.isRequired,
    onChangeZipCode: func.isRequired,
}

export default Form
