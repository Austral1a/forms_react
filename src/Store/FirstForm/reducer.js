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
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                email: action.payload.email,
                phone: action.payload.phone
            }
        default:
            return state
    }
}

export default saveValueReducer
