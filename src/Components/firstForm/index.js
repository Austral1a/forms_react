import Form from '../common/Form'
import Input from '../common/Input'
import Button from '../common/Button'
import {phoneMask} from '../../helpers/masks'
import {validationMessages} from '../../helpers/validationMessages'
import {
    emailValidation,
    firstNameValidation,
    lastNameValidation,
    phoneValidation
} from '../../Store/actions/common/validationErrors'
import anyError from '../../helpers/isThereValidationError'
import firstFormHandler from '../../Store/actions/FirstForm/firstFormHandler'

export {
    Form,
    Input,
    Button,
    phoneMask,
    validationMessages,
    emailValidation,
    firstNameValidation,
    lastNameValidation,
    phoneValidation,
    anyError,
    firstFormHandler
}
