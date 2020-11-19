import {useInputValidation} from '../index';
import {patternNames} from '../../helpers';

export function useValidations(firstName, lastName, emailVal, phoneVal) {
    const {name, email, phone} = patternNames;

    return {
        isFirstNameValid: useInputValidation(name, firstName),
        isLastNameValid: useInputValidation(name, lastName),
        isEmailValid: useInputValidation(email, emailVal),
        isPhoneValid: useInputValidation(phone, phoneVal)
    };
}
