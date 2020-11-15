import {EMAIL_INPUT_CHANGE} from '../action-types'

const emailChange = (char) => ({
    type: EMAIL_INPUT_CHANGE,
    char
})

export default emailChange
