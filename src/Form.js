import React from 'react'
import {
    Button,
    Keyboard,
    StyleSheet,
    TextInput,
    View,
} from 'react-native'
import { string, func } from 'prop-types'
import { colors, mainAppStyles, MainAppText } from './style'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 60,
        paddingBottom: 30,
    },
    inputWrapper: {
        borderWidth: 2,
        borderColor: colors.dark,
        margin: 8,
        padding: 4,
        width: 300,
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
            <MainAppText>Search by zip code or city name</MainAppText>
            <View style={styles.inputWrapper}>
                <TextInput
                    style={mainAppStyles.main}
                    placeholder="Search here"
                    value={zipCode}
                    onChangeText={updateZipCode}
                    keyboardType="numeric"
                />
            </View>
            <Button onPress={onPress} color={colors.medium} title="Get Weather" />
        </View>
    )
}

Form.propTypes = {
    submit: func.isRequired,
    updateZipCode: func.isRequired,
    zipCode: string.isRequired,
}

export default Form
