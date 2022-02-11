import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rocketsReducer from './rockets/rockets';
import missionReducer from './Missions/Missions';

const reducer = combineReducers({
  // rockets reducers here
  rocketsReducer,
  missionReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
