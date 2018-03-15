const { appId } = require('../config.json')

const mainUrl = 'http://api.openweathermap.org/data/2.5/weather'

function getQueryString(params) {
    return Object.keys(params)
        .map(key => `${key}=${params[key]}`)
        .join('&')
}

export function fetchQuery(params) {
    const queryString = getQueryString({
        ...params,
        appId,
        units: 'imperial',
    })
    return fetch(`${mainUrl}?${queryString}`)
        .then((response) => {
            if (response.status > 200) {
                throw new Error('invalid request')
            }
            return response.json()
        })
}
