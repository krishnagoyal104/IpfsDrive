import { AUTH_SET_TOKEN, AUTH_REMOVE_TOKEN, AUTH_SET_TOKEN_ONLY, AUTH_SET_UID_ONLY } from "../actions/actionTypes";

const initialState = {
  token: null,
  expiryDate: null,
  uid: null
};

export default(state = initialState, action) => {
  switch (action.type) {
    case AUTH_SET_TOKEN:
      return {
        ...state,
        token: action.token,
        expiryDate: action.expiryDate,
        uid: action.uid
      };
    case AUTH_REMOVE_TOKEN:
      return {
        ...state,
        token: null,
        expiryDate: null,
        uid: null
      };
    case AUTH_SET_TOKEN_ONLY:
      return {
        ...state,
        token: action.token
      } 
    case AUTH_SET_UID_ONLY:
      return {
        ...state,
        uid: action.uid
      }   
    default:
      return state;
  }
};
