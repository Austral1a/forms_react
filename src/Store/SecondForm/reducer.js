import {COUNTRY_SELECT_CHANGE, PLAN_SELECT_CHANGE} from './index'

export const initState = {
    country: 'us',
    plan: 'free'
}

const secondFormReducer = (state = initState, action) => {
    switch (action.type) {
        case COUNTRY_SELECT_CHANGE:
            return {
                ...state,
                country: action.payload.country
            }
        case PLAN_SELECT_CHANGE:
            return {
                ...state,
                plan: action.payload.plan
            }
        default:
            return state
    }
}

export default secondFormReducer