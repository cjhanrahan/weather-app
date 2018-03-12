import { app } from './reducer'

const appId = '59cc6901083537aad4cd2960f838b0a0'
const mainUrl = 'http://api.openweathermap.org/data/2.5/weather'

function getQueryString(params) {
    return Object.keys(params)
        .map(key => `${key}=${params[key]}`)
        .join('&')
}

export function fetchQuery(params) {
    const queryString = `zip=94040&APPID=${appId}`
    return fetch(`${mainUrl}?${queryString}`)
}
