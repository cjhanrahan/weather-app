import { connect } from 'react-redux'
import Form from './Form'
import { updateZipCode } from './actions'

export const mapStateToProps = state => ({
    zipCode: state.zipCode,
})

export const actions = {
    updateZipCode,
}

export default connect(mapStateToProps, actions)(Form)
