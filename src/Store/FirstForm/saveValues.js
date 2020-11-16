import {SAVE_VALUES_IN_STORE} from './action-types'

const saveValues = (firstName, lastName, email, phone) => ({
    type: SAVE_VALUES_IN_STORE,
    firstName,
    lastName,
    email,
    phone
})

export default saveValues
