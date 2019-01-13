import { SET_IMAGES, REMOVE_IMAGE } from "./actionTypes";
import { uiStartLoading, uiStopLoading, authGetToken, getUserId } from "./index";

export const startAddImage = (image) => {
  return (dispatch, getState) => {
    let authToken;
    dispatch(uiStartLoading());
    dispatch(authGetToken())
      .catch(() => {
        alert("No valid token found!");
      })
      .then(token => {
        authToken = token;
        return fetch(
          "https://ipfs.infura.io:5001/api/v0/add",
          {
            method: "POST",
            body: image,
            headers: {
              'Content-Type': 'multipart/form-data',
           }
          }
        );
      })
      .catch(err => {
        console.log(err);
        alert("Something went wrong, please try again!");
        dispatch(uiStopLoading());
      })
      .then(res => res.json())
      .then(parsedRes => {
        const object = {
          name: parsedRes.Name,
          hash: parsedRes.Hash,
          size: parsedRes.Size
        };
        const uid = getState().auth.uid;
        console.log('Hi', uid);
        return fetch(
          "https://ipfs-a5310.firebaseio.com/users/" + uid + ".json?auth=" +
            authToken,
          {
            method: "POST",
            body: JSON.stringify(object)
          }
        );
      })
      .then(res => res.json())
      .then(parsedRes => {
        dispatch(uiStopLoading());
      })
      .catch(err => {
        console.log(err);
        alert("Something went wrong, please try again!");
        dispatch(uiStopLoading());
      });
  };
};

export const startLoadImages = () => {
  return (dispatch, getState) => {
    dispatch(authGetToken())
      .then(token => {
        const uid = getState().auth.uid;
        return fetch(
          "https://ipfs-a5310.firebaseio.com/users/" + uid + ".json?auth=" +
            token
        );
      })
      .catch(() => {
        alert("No valid token found!");
      })
      .then(res => res.json())
      .then(parsedRes => {
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
