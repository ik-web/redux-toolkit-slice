import { createStore, applyMiddleware, combineReducers,  } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import { reducer } from './reducer';

const rootReducer = combineReducers({
  reducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
