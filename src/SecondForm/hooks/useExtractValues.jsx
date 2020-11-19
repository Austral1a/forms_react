import {useSelector} from 'react-redux';

export function useExtractValues() {
    return {
        country: useSelector(state => state.secondFormReducer.country),
        plan: useSelector(state => state.secondFormReducer.plan)
    };
}
