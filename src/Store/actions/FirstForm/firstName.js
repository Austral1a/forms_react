import {FIRST_NAME_INPUT_CHANGE} from '../action-types'

const firstNameChange = (char) => ({
    type: FIRST_NAME_INPUT_CHANGE,
    char
})

export default firstNameChange
