import saveValueReducer from '../reducer'
import * as types from '../action-types'

describe('save values reducer', () => {
    const initState = {
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    }
    const values = {
        firstName: 'Kyle',
        lastName: 'Butler',
        email: 'email@e.com',
        phone: '(123) 456 - 7890'
    }
    it('must return initial state', () => {
        expect(saveValueReducer(undefined, {})).toStrictEqual(initState)
    })

    it('must handle SAVE_VALUES_IN_STORE', () => {
        expect(saveValueReducer({}, {
            type: types.SAVE_VALUES_IN_STORE,
            ...values
        })).toStrictEqual(values)
    })

})