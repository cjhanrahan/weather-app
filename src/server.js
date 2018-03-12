const appId = '59cc6901083537aad4cd2960f838b0a0'
const mainUrl = 'http://api.openweathermap.org/data/2.5/weather'

function getQueryString(params) {
    return Object.keys(params)
        .map(key => `${key}=${params[key]}`)
        .join('&')
}

export function fetchQuery(params) {
    const queryString = getQueryString({
        ...params,
        APPID: appId,
    })
    return fetch(`${mainUrl}?${queryString}`)
        .then((response) => {
            if (response.status > 200) {
                throw new Error('invalid request')
            }
            return response.json()
        })
}
