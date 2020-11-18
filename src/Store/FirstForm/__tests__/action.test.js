import saveValues from '../action'
import * as types from '../action-types'

describe('action', () => {
    it('must create an action to save value into store', () => {
        const payload = {
            firstName: 'Kyle',
            lastName: 'Butler',
            email: 'email@e.com',
            phone: '(123) 456 - 7890'
        }
        const expectedAction = {
            type: types.SAVE_VALUES_IN_STORE,
            payload
        }
        expect(saveValues(
            payload.firstName,
            payload.lastName,
            payload.email,
            payload.phone
            )).toStrictEqual(expectedAction)
    })
})