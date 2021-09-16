import { combineReducers } from 'redux';

import { layout } from './layout-reducer';

const rootReducer = combineReducers({
  layout,
});

export default rootReducer;