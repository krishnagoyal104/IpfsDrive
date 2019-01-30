import {SET_UPLOAD_PROGRESS} from './actionTypes';

export const uploadProgress = (progress) => {
    return {  
    	type: SET_UPLOAD_PROGRESS,
    	progress
    };
};