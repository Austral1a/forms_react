import {LAST_NAME_INPUT_CHANGE} from '../action-types'

const lastNameChange = (char) => ({
    type: LAST_NAME_INPUT_CHANGE,
    char
})

export default lastNameChange
