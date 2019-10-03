import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from './middleware/thunk';
// import thunk from 'redux-thunk';
import jobs from './reducers/jobs';

const reducers = combineReducers({
  jobs,
});

const store = () => createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
