import { SET_UPLOAD_PROGRESS } from '../actions/actionTypes';

const initialState = {
	progress: null
};

export default(state = initialState, action) => {
	switch(action.type){
	case SET_UPLOAD_PROGRESS:
		return {
				progress: action.progress  
		}
	default:
		return state;		
	}
};