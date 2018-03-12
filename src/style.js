import React from 'react'
import { node } from 'prop-types'
import { Text } from 'react-native'


export const MainAppText = ({ children }) => (
    <Text style={{ fontWeight: '900' }}>
        {children}
    </Text>
)

MainAppText.propTypes = {
    children: node,
}

MainAppText.defaultProps = {
    children: null,
}
