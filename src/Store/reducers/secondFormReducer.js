import {COUNTRY_SELECT_CHANGE} from '../actions/action-types'

const initState = {
    country: 'us'
}

const secondFormReducer = (state = initState, action) => {
    switch (action.type) {
        case COUNTRY_SELECT_CHANGE:
            return {
                ...state,
                country: action.country
            }
        default:
            return state
    }
}

export default secondFormReducer
