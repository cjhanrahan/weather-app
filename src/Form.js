import React from 'react'
import { Button, Image, StyleSheet, TextInput, View } from 'react-native'
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
    iconUrl,
    status,
    submit,
    updateZipCode,
    weatherDescription,
    zipCode,
}) => (
    <View style={styles.container}>
        <TextInput
            style={{ height: 40 }}
            placeholder="Enter zip code"
            value={zipCode}
            onChangeText={updateZipCode}
            keyboardType="numeric"
        />
        <Button onPress={submit} title="Get Weather" />
        {iconUrl ? <Image source={{ uri: iconUrl }} style={{ height: 50, width: 50 }} /> : null}
        <MainAppText>{`status: ${status}`}</MainAppText>
        <MainAppText>{`description: ${weatherDescription}`}</MainAppText>
    </View>
)

Form.propTypes = {
    weatherDescription: string.isRequired,
    status: string.isRequired,
    submit: func.isRequired,
    updateZipCode: func.isRequired,
    zipCode: string.isRequired,
    iconUrl: string,
}

Form.defaultProps = {
    iconUrl: null,
}

export default Form
