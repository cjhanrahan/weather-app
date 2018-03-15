import React from 'react'
import {
    Button,
    Keyboard,
    StyleSheet,
    TextInput,
    View,
} from 'react-native'
import { string, func } from 'prop-types'
import { colors, mainAppStyles, MainAppText, spacing } from './style'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: spacing.medium,
        paddingBottom: spacing.small,
        width: '100%',
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
    searchTerm,
    submit,
    updateSearchTerm,
}) => {
    const onPress = () => {
        submit()
        Keyboard.dismiss()
    }
    return (
        <View style={styles.container}>
            <MainAppText>Search by city name or zip code</MainAppText>
            <View style={styles.inputWrapper}>
                <TextInput
                    style={mainAppStyles.main}
                    placeholder="Search here"
                    value={searchTerm}
                    onChangeText={updateSearchTerm}
                />
            </View>
            <Button onPress={onPress} color={colors.medium} title="Get Weather" />
        </View>
    )
}

Form.propTypes = {
    searchTerm: string.isRequired,
    submit: func.isRequired,
    updateSearchTerm: func.isRequired,
}

export default Form
