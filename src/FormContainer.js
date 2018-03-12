import { connect } from 'react-redux'
import Form from './Form'
import {
    submit,
    updateZipCode,
} from './actions'
import {
    getWeatherIconURL,
    getWeatherSentence,
} from './selectors'

export const mapStateToProps = ({ app }) => ({
    weatherDescription: getWeatherSentence(app),
    iconUrl: getWeatherIconURL(app),
    status: app.status,
    zipCode: app.zipCode,
})

export const actions = {
    submit,
    updateZipCode,
}

export default connect(mapStateToProps, actions)(Form)
