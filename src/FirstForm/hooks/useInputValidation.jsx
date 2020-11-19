import {useMemo} from 'react';
import {patterns, isInputValid} from '../../helpers';
export function useInputValidation(patternName, inputName) {
    return useMemo(
        () => {
            return isInputValid(patterns[patternName], inputName)
        }, [inputName]
    );
}
