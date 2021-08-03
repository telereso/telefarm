// Imports: Dependencies
import { combineReducers } from 'redux';
// Imports: Reducers
import { authReducer } from './authReducer';
import { sessionAuthReducer } from './sessionAuthReducer';
// Redux: Root Reducer
const rootReducer = combineReducers({
  authReducer: authReducer,
  sessionAuthReducer: sessionAuthReducer
});
// Exports
export default rootReducer;
