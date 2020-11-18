import {SAVE_VALUES_IN_STORE} from './action-types'

const initState = {
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
}

const saveValueReducer = (state = initState, action) => {
    switch(action.type) {
        case SAVE_VALUES_IN_STORE:
            return {
                ...state,
                firstName: action.firstName,
                lastName: action.lastName,
                email: action.email,
                phone: action.phone
            }
        default:
            return state
    }
}

export default saveValueReducer
