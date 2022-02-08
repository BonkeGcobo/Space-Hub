import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rocketsReducer from './rockets/rockets';

const reducer = combineReducers({
  // rockets reducers here
  rocketsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
