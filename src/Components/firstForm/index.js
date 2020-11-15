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
import firstNameChange from '../../Store/actions/FirstForm/firstName'
import lastNameChange from '../../Store/actions/FirstForm/lastName'
import emailChange from '../../Store/actions/FirstForm/email'
import phoneChange from '../../Store/actions/FirstForm/phone'
import {Link} from 'react-router-dom'
import userSvg from '../../assets/user.svg'
import emailSvg from '../../assets/email.svg'
import phoneSvg from '../../assets/phone.svg'

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
    firstFormHandler,
    Link,
    firstNameChange,
    lastNameChange,
    emailChange,
    phoneChange,
    userSvg,
    emailSvg,
    phoneSvg
}
