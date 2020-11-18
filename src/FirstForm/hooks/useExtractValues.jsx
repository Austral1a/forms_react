import {useSelector} from 'react-redux'
function useExtractValues() {
    return {
        firstName: useSelector(state => state.saveValueReducer.firstName),
        lastName: useSelector(state => state.saveValueReducer.lastName),
        email: useSelector(state => state.saveValueReducer.email),
        phone: useSelector(state => state.saveValueReducer.phone)
    }
}

export default useExtractValues
