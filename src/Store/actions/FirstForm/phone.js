import {PHONE_INPUT_CHANGE} from '../action-types'

const phoneChange = (char) => ({
    type: PHONE_INPUT_CHANGE,
    char
})

export default phoneChange
