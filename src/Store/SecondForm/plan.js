import {PLAN_SELECT_CHANGE} from './action-types'

const planChange = (plan) => ({
    type: PLAN_SELECT_CHANGE,
    plan
})

export default planChange
