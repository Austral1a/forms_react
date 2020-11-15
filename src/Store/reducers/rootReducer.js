import {combineReducers} from 'redux'
import formValidationReducer from './FormValidationReducer'
import firstFormReducer from './firstFormReducer'

const rootReducer = combineReducers({
      formValidationReducer,
      firstFormReducer
})

export default rootReducer
