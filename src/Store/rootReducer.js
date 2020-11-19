import {combineReducers} from 'redux';
import {secondFormReducer} from './SecondForm';
import {saveValueReducer} from './FirstForm';

export const rootReducer = combineReducers({
      secondFormReducer,
      saveValueReducer
});

