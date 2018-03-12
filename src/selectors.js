export function getWeatherSentence(app) {
    if (app.status === 'error') {
        return `Error: ${app.lastErrorMessage}`
    }
    const { weather } = app.lastResult
    return weather ? weather[0].description : ''
}

export function getWeatherIconURL(app) {
    const { weather } = app.lastResult
    return weather ? `http://openweathermap.org/img/w/${weather[0].icon}.png` : null
}
