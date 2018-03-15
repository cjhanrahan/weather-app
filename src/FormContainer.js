import { connect } from 'react-redux'
import Form from './Form'
import {
    submit,
    updateSearchTerm,
} from './actions'
import {
    getWeatherIconURL,
    getWeatherSentence,
} from './selectors'

export const mapStateToProps = ({ app }) => ({
    iconUrl: getWeatherIconURL(app),
    weatherDescription: getWeatherSentence(app),
    searchTerm: app.searchTerm,
})

export const actions = {
    submit,
    updateSearchTerm,
}

export default connect(mapStateToProps, actions)(Form)
