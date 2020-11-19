import {useExtractValues} from '../useExtractValues'
import configureStore from 'redux-mock-store'
import * as reactRedux from 'react-redux'
import {renderHook} from '@testing-library/react-hooks'


describe('', () => {
    let store
    let wrapper
    let values
    beforeEach(() => {
        values = {
            firstName: 'john',
            lastName: 'doe',
            email: 'john@j.com',
            phone: '(123) 456 - 7890'
        }
        store = configureStore() (values)

        jest
            .spyOn(reactRedux, 'useSelector')
            .mockImplementationOnce(() => store.getState().firstName)
            .mockImplementationOnce(() => store.getState().lastName)
            .mockImplementationOnce(() => store.getState().email)
            .mockImplementationOnce(() => store.getState().phone)

        const {result} = renderHook(() => useExtractValues())
        wrapper = result
    })

    it('useExtractValues hook must return values object', () => {
        expect(wrapper.current).toStrictEqual(values)
    })
})