import {COUNTRY_SELECT_CHANGE, PLAN_SELECT_CHANGE} from './action-types'

export const countryChange = (country) => ({
    type: COUNTRY_SELECT_CHANGE,
    payload: {
        country
    }
})

export const planChange = (plan) => ({
    type: PLAN_SELECT_CHANGE,
    payload: {
        plan
    }
})
