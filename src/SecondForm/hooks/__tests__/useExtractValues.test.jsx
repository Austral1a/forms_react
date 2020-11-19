import {useExtractValues} from '../useExtractValues'
import configureStore from 'redux-mock-store'
import * as reactRedux from 'react-redux'
import {renderHook} from '@testing-library/react-hooks'

describe('useExtractValues hook', () => {
    let store
    let wrapper
    let values
    beforeEach(() => {
        values = {
            country: 'us',
            plan: 'basic'
        }
        store = configureStore() (values)

        jest
            .spyOn(reactRedux, 'useSelector')
            .mockImplementationOnce(() => store.getState().country)
            .mockImplementationOnce(() => store.getState().plan)

        const {result} = renderHook(() => useExtractValues())
        wrapper = result
    })

    it('useExtractValues hook must return values object', () => {
        expect(wrapper.current).toStrictEqual(values)
    })
})