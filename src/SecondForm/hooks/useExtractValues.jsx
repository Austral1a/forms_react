import {useSelector} from 'react-redux'

function useExtractValues() {
    return {
        country: useSelector(state => state.secondFormReducer.country),
        plan: useSelector(state => state.secondFormReducer.plan)
    }
}

export default useExtractValues
