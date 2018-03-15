import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { bool, number, string } from 'prop-types'
import { colors, HeaderText, MainAppText, SmallText, spacing } from './style'

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.white,
        flex: 1,
        justifyContent: 'center',
        padding: spacing.small,
        width: '100%',
    },
    image: {
        height: 60,
        width: 60,
        padding: 10,
    },
    cityName: {
        paddingBottom: spacing.small
    },
})

const Results = ({
    cityName,
    currentTemp,
    iconUrl,
    loading,
    timeString,
    weatherDescription,
}) => {
    if (loading) {
        return (
            <View style={styles.container}>
                <MainAppText>loading...</MainAppText>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.cityName}>
                <HeaderText>{cityName}</HeaderText>
            </View>
            <HeaderText>{currentTemp && `${currentTemp}° (F)`}</HeaderText>
            <MainAppText>{weatherDescription}</MainAppText>
            {iconUrl ?
                <Image source={{ uri: iconUrl }} style={styles.image} />
                : null
            }
            <SmallText>{timeString && `Temperature measured at: ${timeString}`}</SmallText>
        </View>
    )
}

Results.propTypes = {
    cityName: string,
    currentTemp: number,
    iconUrl: string,
    loading: bool.isRequired,
    timeString: string,
    weatherDescription: string,
}

Results.defaultProps = {
    cityName: null,
    currentTemp: null,
    iconUrl: null,
    timeString: string,
    weatherDescription: null,
}

export default Results
