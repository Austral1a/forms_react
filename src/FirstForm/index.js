import Form from '../Components/common/Form/Form'
import Input from '../Components/common/Input/Input'
import Button from '../Components/common/Button/Button'
import {phoneMask} from '../helpers/masks/masks'
import {validationMessages} from '../helpers/validationMessages/validationMessages'
import {Link} from 'react-router-dom'
import userSvg from '../assets/user.svg'
import emailSvg from '../assets/email.svg'
import phoneSvg from '../assets/phone.svg'
import ErrorBoundary from '../ErrorBoundary'
import useExtractValues from './hooks/useExtractValues'
import useInputValidation from './hooks/useInputValidation'
import saveValues from '../Store/FirstForm/action'
import useValidations from './hooks/useValidations'
import {routes} from '../routes'

export {
    Form,
    Input,
    Button,
    phoneMask,
    validationMessages,
    Link,
    userSvg,
    emailSvg,
    phoneSvg,
    ErrorBoundary,
    useExtractValues,
    useInputValidation,
    saveValues,
    useValidations,
    routes
}
