import { combineReducers } from 'redux';

import { layout } from './layout-reducer';
// import reducer from "./userReducer";

const rootReducer = combineReducers({
  layout,
  // reducer
});

export default rootReducer;

