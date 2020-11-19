import {saveValueReducer} from '../reducer'
import {saveValues} from '../action'

describe('save values reducer', () => {
    const firstName = 'Kyle'
    const lastName = 'Butler'
    const email = 'email@e.com'
    const phone = '(123) 456 - 7890'

    it('must return initial state', () => {
        const initState = {
            firstName: '',
            lastName: '',
            email: '',
            phone: ''
        }

        expect(saveValueReducer(undefined, {})).toStrictEqual(initState)
    })

    it('must handle SAVE_VALUES_IN_STORE', () => {
        const expectedObj = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone
        }
        const args = [firstName, lastName, email, phone]

        expect(saveValueReducer({}, saveValues(...args))).toStrictEqual(expectedObj)
    })

})