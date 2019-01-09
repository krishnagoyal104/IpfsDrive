const defaultState = '';

export default (state=defaultState, action) => {
	switch(action.type){
		case 'LOGIN':
			return 'Login';		
		default : 
			return state;
	}
};