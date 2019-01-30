import axios from 'axios';

import { SET_IMAGES, REMOVE_IMAGE } from "./actionTypes";
import { uiStartLoading, uiStopLoading, authGetToken, getUserId, uploadProgress } from "./index";

export const startAddImage = (image) => {
  return (dispatch, getState) => {
    let authToken;
    let object;
    dispatch(authGetToken())
      .catch(() => {
        alert("No valid token found!");
      })
      .then(token => {
        authToken = token;
        return axios(
          {
            url: "https://ipfs.infura.io:5001/api/v0/add",
            method: "post",
            data: image,
            headers: {
              'Content-Type': 'multipart/form-data',
           },
           onUploadProgress: function(progress){
            console.log(progress.loaded/progress.total);
            dispatch(uploadProgress(progress.loaded/progress.total));
           }
          }
        );
      })
      .catch(err => {
        console.log(err);
        alert("Something went wrong, please try again!");
      })
      .then(res => {
        let parsedRes = res.data;
        object = {
          name: parsedRes.Name,
          hash: parsedRes.Hash,
          size: parsedRes.Size
        };
        const uid = getState().auth.uid;
        console.log('Hi', uid);
        return axios(
          {
            url: "https://ipfs-a5310.firebaseio.com/users/" + uid + ".json?auth=" + authToken,
            method: "post",
            data: object
          }
        );
      })
      .then(parsedRes => {
        const image = {
          ...object,
          key: parsedRes.data.name
        }
        dispatch(setImages(image));
      })
      .catch(err => {
        console.log(err);
        alert("Something went wrong, please try again!");
      });
  };
};

export const startLoadImages = () => {
  return (dispatch, getState) => {
    dispatch(authGetToken())
      .then(token => {
        const uid = getState().auth.uid;
        return axios(
          "https://ipfs-a5310.firebaseio.com/users/" + uid + ".json?auth=" +
            token
        );
      })
      .catch(() => {
        alert("No valid token found!");
      })
      .then(res => {
        let parsedRes = res.data;
        console.log(parsedRes);
        const images = [];
        for (let key in parsedRes) {
          images.push({
            ...parsedRes[key],                        
            key: key
          }); 
        }
        dispatch(setImages(images));
      })
      .catch(err => {
        alert("Something went wrong, sorry :/");
        console.log(err);
      });
  };
};

export const setImages = (images) => {
  return {
    type: SET_IMAGES,
    images: images
  };
};

export const removeImage = (key) => {
  return {
    type: REMOVE_IMAGE,
    key: key
  };
};
