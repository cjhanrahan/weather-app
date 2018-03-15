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

export function getCurrentTemperature({ lastResult }) {
    return path(['main', 'temp'], lastResult) || null
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

export function getTimeString({ lastResult }) {
    if (!lastResult.dt) {
        return null
    }
    const date = new Date(lastResult.dt * 1000)
    return date.toLocaleTimeString()
}

export function getSearchParameters({ searchTerm }) {
    const trimmed = searchTerm.trim()
    if (/\d{%}/.test(trimmed)) {
        return { zip: trimmed }
    }
    return { q: encodeURIComponent(trimmed) }
}
