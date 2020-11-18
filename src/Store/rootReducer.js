import {combineReducers} from 'redux'
import secondFormReducer from './SecondForm/reducer'
import saveValueReducer from './FirstForm/reducer'

const rootReducer = combineReducers({
      secondFormReducer,
      saveValueReducer
})

export default rootReducer
