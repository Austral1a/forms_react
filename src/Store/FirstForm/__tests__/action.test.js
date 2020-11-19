import {SAVE_VALUES_IN_STORE, saveValues} from '../action'

describe('action', () => {
    it('must create an action to save value into store', () => {
        const payload = {
            firstName: 'Kyle',
            lastName: 'Butler',
            email: 'email@e.com',
            phone: '(123) 456 - 7890'
        }
        const expectedAction = {
            type: SAVE_VALUES_IN_STORE,
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