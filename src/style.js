import React from 'react'
import { node } from 'prop-types'
import { StyleSheet, Text } from 'react-native'

export const colors = {
    light: '#e0ffff',
    medium: '#20b2aa',
    dark: '#008b8b',
    white: '#fffafa',
    black: '#2f4f4f',
}

export const fontSizes = {
    tiny: 15,
    medium: 24,
    large: 30,
}

export const spacing = {
    medium: 60,
    small: 35,
}


export const mainAppStyles = StyleSheet.create({
    main: {
        fontWeight: '600',
        fontSize: fontSizes.medium,
        color: colors.black,
    }
})

export const MainAppText = ({ children }) => (
    <Text style={{ fontSize: fontSizes.medium }}>
        {children}
    </Text>
)

MainAppText.propTypes = { children: node }

MainAppText.defaultProps = { children: null }

export const HeaderText = ({ children }) => (
    <MainAppText>
        <Text style={{ fontSize: fontSizes.large }}>
            {children}
        </Text>
    </MainAppText>
)

HeaderText.propTypes = { children: node }

HeaderText.defaultProps = { children: null }

export const SmallText = ({ children }) => (
    <MainAppText>
        <Text style={{ fontSize: fontSizes.tiny }}>
            {children}
        </Text>
    </MainAppText>
)

SmallText.propTypes = { children: node }

SmallText.defaultProps = { children: null }
