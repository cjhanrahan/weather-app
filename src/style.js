import React from 'react'
import { node } from 'prop-types'
import { StyleSheet, Text } from 'react-native'


export const mainAppStyles = StyleSheet.create({
    main: {
        fontWeight: '600',
        fontSize: 24,
    }
})

export const MainAppText = ({ children }) => (
    <Text style={[mainAppStyles.main]}>
        {children}
    </Text>
)

MainAppText.propTypes = {
    children: node,
}

MainAppText.defaultProps = {
    children: null,
}
