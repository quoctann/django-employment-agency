import { combineReducers } from 'redux';

import { layout } from './layout-reducer';
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  layout,
  userReducer
});

export default rootReducer;

