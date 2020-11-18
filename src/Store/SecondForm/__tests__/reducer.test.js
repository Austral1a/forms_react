import * as types from '../action-types'
import secondFormReducer from '../reducer'

describe('Second Form reducer', () => {
    const initState = {
        country: 'us',
        plan: 'free'
    }
    const newCountry = {
        country: 'ua'
    }
    const newPlan = {
        plan: 'basic'
    }
    const newState = {
        country: 'ua',
        plan: 'basic'
    }
    it("must return initial state", () => {
        expect(secondFormReducer(undefined, {})).toStrictEqual(initState)
    })

    it('must handle COUNTRY_SELECT_CHANGE', () => {
        expect(secondFormReducer({}, {
            type: types.COUNTRY_SELECT_CHANGE,
            ...newCountry
        })).toStrictEqual(newCountry)
    })

    it('must handle PLAN_SELECT_CHANGE', () => {
        expect(secondFormReducer({}, {
            type: types.PLAN_SELECT_CHANGE,
            ...newPlan
        })).toStrictEqual(newPlan)
    })

    it('must handle whole actions', () => {
        const returnedState = {
            ...secondFormReducer({}, {
                type: types.COUNTRY_SELECT_CHANGE,
                country: newState.country}),
            ...secondFormReducer({}, {
                type: types.PLAN_SELECT_CHANGE,
                plan: newState.plan
            })
        }
        expect(returnedState).toStrictEqual(newState)
    })
})