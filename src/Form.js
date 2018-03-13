import React from 'react'
import {
    Button,
    Keyboard,
    StyleSheet,
    TextInput,
    View,
} from 'react-native'
import { string, func } from 'prop-types'
import { mainAppStyles } from './style'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

const Form = ({
    submit,
    updateZipCode,
    zipCode,
}) => {
    const onPress = () => {
        submit()
        Keyboard.dismiss()
    }
    return (
        <View style={styles.container}>
            <TextInput
                style={mainAppStyles.main}
                placeholder="Enter zip code"
                value={zipCode}
                onChangeText={updateZipCode}
                keyboardType="numeric"
            />
            <Button onPress={onPress} title="Get Weather" />
        </View>
    )
}

Form.propTypes = {
    submit: func.isRequired,
    updateZipCode: func.isRequired,
    zipCode: string.isRequired,
}

export default Form
