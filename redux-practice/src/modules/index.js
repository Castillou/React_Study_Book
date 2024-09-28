import { combineReducers } from 'redux';

import counter from './counter.js';
import todos from './todos.js';

// 루트 리듀서 생성하기
const rootReducer = combineReducers({
	counter,
	todos,
});

export default rootReducer;
