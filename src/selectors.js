import { path, prop } from 'ramda'

export function getWeatherSentence({ lastResult }) {
    return path(['weather', 0, 'description'], lastResult) || null
}

export function getStatusMessage({ status }) {
    if (status === 'error') {
        return 'No results found.'
    }
    if (status === 'loading') {
        return 'Loading...'
    }
    return null
}

export function getCityName({ lastResult }) {
    return prop('name', lastResult)
}

export function getWeatherIconURL({ lastResult, status }) {
    if (status === 'error') {
        return null
    }
    const { weather } = lastResult
    return weather ? `http://openweathermap.org/img/w/${weather[0].icon}.png` : null
}

export function getErrorMessage({ lastErrorMessage, status }) {
    return status === 'error' ? lastErrorMessage : null
}
