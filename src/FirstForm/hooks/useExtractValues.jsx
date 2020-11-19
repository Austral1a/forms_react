import {useSelector} from 'react-redux';
export function useExtractValues() {
    return {
        firstName: useSelector(state => state.saveValueReducer.firstName),
        lastName: useSelector(state => state.saveValueReducer.lastName),
        email: useSelector(state => state.saveValueReducer.email),
        phone: useSelector(state => state.saveValueReducer.phone)
    };
}
