import {useValidations} from '../useValidations'
import {renderHook} from '@testing-library/react-hooks'

describe('useValidations hook', () => {
    it("every input valid, must return obj with all true", () => {
        const firstName = 'john'
        const lastName = 'doe'
        const email = 'doe@d.com'
        const phone = '(123) 456 - 7890'

        const {result} = renderHook(() => useValidations(firstName, lastName, email, phone))
        expect(result.current).toStrictEqual({
            isFirstNameValid: true,
            isLastNameValid: true,
            isEmailValid: true,
            isPhoneValid: true
        })
    })

    it("email is not valid, must return obj with all true except email", () => {
        const firstName = 'john'
        const lastName = 'doe'
        const email = 'doe@.com'
        const phone = '(123) 456 - 7890'

        const {result} = renderHook(() => useValidations(firstName, lastName, email, phone))
        expect(result.current).toStrictEqual({
            isFirstNameValid: true,
            isLastNameValid: true,
            isEmailValid: false,
            isPhoneValid: true
        })
    })

    it("firstName and lastName are not valid, must return obj with all true except names", () => {
        const firstName = 'j0hn'
        const lastName = 'd0e'
        const email = 'doe@d.com'
        const phone = '(123) 456 - 7890'

        const {result} = renderHook(() => useValidations(firstName, lastName, email, phone))
        expect(result.current).toStrictEqual({
            isFirstNameValid: false,
            isLastNameValid: false,
            isEmailValid: true,
            isPhoneValid: true
        })
    })


    it("every value is not valid, must return obj with all false", () => {
        const firstName = 'j0hn'
        const lastName = 'd0e'
        const email = 'doe@.com'
        const phone = '(123)456 - 7890'

        const {result} = renderHook(() => useValidations(firstName, lastName, email, phone))
        expect(result.current).toStrictEqual({
            isFirstNameValid: false,
            isLastNameValid: false,
            isEmailValid: false,
            isPhoneValid: false
        })
    })
})