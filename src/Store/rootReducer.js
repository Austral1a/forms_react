import {combineReducers} from 'redux'
import secondFormReducer from './SecondForm/secondFormReducer'
import saveValueReducer from './FirstForm/saveValuesReducer'

const rootReducer = combineReducers({
      secondFormReducer,
      saveValueReducer
})

export default rootReducer
