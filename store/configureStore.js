import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import uiReducer from '../reducers/ui';
import imageReducer from '../reducers/images';
import progressReducer from '../reducers/progress';

/*let composeEnhancers = compose;

if(__DEV__){
	composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;
}*/

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
	const store = createStore(combineReducers({
		auth: authReducer,
		ui: uiReducer,
		images: imageReducer,
		progress: progressReducer
		}),
		composeEnhancers(applyMiddleware(thunk))
		  
	);
	return store;
};