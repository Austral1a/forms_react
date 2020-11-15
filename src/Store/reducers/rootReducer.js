import {combineReducers} from 'redux'
import formValidationReducer from './FormValidationReducer'
import firstFormReducer from './firstFormReducer'
import secondFormReducer from './secondFormReducer'

const rootReducer = combineReducers({
      formValidationReducer,
      firstFormReducer,
      secondFormReducer
})

export default rootReducer
