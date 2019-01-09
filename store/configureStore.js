import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import authReducer from '../reducers/auth';
import thunk from 'redux-thunk';

/*let composeEnhancers = compose;

if(__DEV__){
	composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;
}*/

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
	const store = createStore(combineReducers({
		auth: authReducer,
		}),
		composeEnhancers(applyMiddleware(thunk))
		  
	);
	return store;
};