import {useSelector} from 'react-redux'
function useExtractValues() {
    const values = {}
    values.firstName = useSelector(state => state.saveValueReducer.firstName)
    values.lastName = useSelector(state => state.saveValueReducer.lastName)
    values.email = useSelector(state => state.saveValueReducer.email)
    values.phone = useSelector(state => state.saveValueReducer.phone)
    return values
}

export default useExtractValues
