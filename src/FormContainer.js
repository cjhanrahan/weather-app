import { connect } from 'react-redux'
import Form from './Form'
import {
    submit,
    updateZipCode,
} from './actions'

export const mapStateToProps = ({ app }) => ({
    lastResult: JSON.stringify(app.lastResult),
    status: app.status,
    zipCode: app.zipCode,
})

export const actions = {
    submit,
    updateZipCode,
}

export default connect(mapStateToProps, actions)(Form)
