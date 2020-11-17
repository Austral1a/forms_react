import Form from '../common/Form'
import Input from '../common/Input'
import Button from '../common/Button'
import {phoneMask} from '../../helpers/masks'
import {validationMessages} from '../../helpers/validationMessages'
import anyError from '../../helpers/isThereValidationError'
import {Link} from 'react-router-dom'
import userSvg from '../../assets/user.svg'
import emailSvg from '../../assets/email.svg'
import phoneSvg from '../../assets/phone.svg'
import FirstNameInput from './descendants/FirstNameInput'
import LastNameInput from './descendants/LastNameInput'
import EmailInput from './descendants/EmailInput'
import PhoneInput from './descendants/PhoneInput'
import NextBtn from './descendants/NextBtn'
import ErrorBoundary from '../ErrorBoundary'
import useExtractValues from './hooks/useExtractValues'
import useInputValidation from './hooks/useInputValidation'
import saveValues from '../../Store/FirstForm/saveValues'

export {
    Form,
    Input,
    Button,
    phoneMask,
    validationMessages,
    anyError,
    Link,
    userSvg,
    emailSvg,
    phoneSvg,
    FirstNameInput,
    LastNameInput,
    EmailInput,
    PhoneInput,
    NextBtn,
    ErrorBoundary,
    useExtractValues,
    useInputValidation,
    saveValues
}
