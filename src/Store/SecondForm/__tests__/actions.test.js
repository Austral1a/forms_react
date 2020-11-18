import * as types from '../action-types'
import * as actions from '../actions'

describe('Second Form actions', () => {
    it('must create an action to save selected country in store', () => {
        const payload = {
            country: 'us'
        }
        const expectedAction = {
            type: types.COUNTRY_SELECT_CHANGE,
            payload
        }
        expect(actions.countryChange(
            payload.country
        )).toStrictEqual(expectedAction)
    })

    it('must create an action to save selected plan in store', () => {
        const payload = {
            plan: 'basic'
        }
        const expectedAction = {
            type: types.PLAN_SELECT_CHANGE,
            payload
        }
        expect(actions.planChange(
            payload.plan
        )).toStrictEqual(expectedAction)
    })
})