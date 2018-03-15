import { connect } from 'react-redux'
import Results from './Results'
import {
    getCityName,
    getCurrentTemperature,
    getTimeString,
    getWeatherIconURL,
    getWeatherSentence,
} from './selectors'

export const mapStateToProps = ({ app }) => ({
    cityName: getCityName(app),
    currentTemp: getCurrentTemperature(app),
    timeString: getTimeString(app),
    iconUrl: getWeatherIconURL(app),
    loading: app.status === 'loading',
    weatherDescription: getWeatherSentence(app),
})


export default connect(mapStateToProps)(Results)
