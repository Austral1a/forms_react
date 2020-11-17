import {useSelector} from 'react-redux'

function useExtractValues() {
    const values = {}
    values.country = useSelector(state => state.secondFormReducer.country)
    values.plan = useSelector(state => state.secondFormReducer.plan)
    return values
}

export default useExtractValues
