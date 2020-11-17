import {COUNTRY_SELECT_CHANGE, PLAN_SELECT_CHANGE} from './action-types'

const initState = {
    country: 'us',
    plan: 'free'
}

const secondFormReducer = (state = initState, action) => {
    switch (action.type) {
        case COUNTRY_SELECT_CHANGE:
            return {
                ...state,
                country: action.country
            }
        case PLAN_SELECT_CHANGE:
            return {
                ...state,
                plan: action.plan
            }
        default:
            return state
    }
}

export default secondFormReducer
