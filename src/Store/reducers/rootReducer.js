import {combineReducers} from 'redux'
import secondFormReducer from './secondFormReducer'
import saveValueReducer from '../FirstForm/saveValuesReducer'

const rootReducer = combineReducers({
      secondFormReducer,
      saveValueReducer
})

export default rootReducer
