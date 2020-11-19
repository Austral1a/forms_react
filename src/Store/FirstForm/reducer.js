import {SAVE_VALUES_IN_STORE} from './index'

export const initState = {
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
}

export const saveValueReducer = (state = initState, action) => {
    switch(action.type) {
        case SAVE_VALUES_IN_STORE:
            const {payload: {firstName, lastName, email, phone}} = action

            return {
                ...state,
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone
            }
        default:
            return state
    }
}

