import axios from 'axios';

import { AsyncStorage } from "react-native";

import { TRY_AUTH, AUTH_SET_TOKEN, AUTH_REMOVE_TOKEN, AUTH_SET_TOKEN_ONLY, AUTH_SET_UID_ONLY } from "./actionTypes";
import { uiStartLoading, uiStopLoading } from "./index";

import { goToAuth, goHome } from '../App';

const API_KEY = "AIzaSyD9WLjsC0ll5TQiCmOAGFR4wONsX8tnWfE";

export const tryAuth = (authData, authMode) => {
  return dispatch => {
    dispatch(uiStartLoading());
    let url =
      "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=" +
      API_KEY;
    if (authMode === "signup") {
      url =
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=" +
        API_KEY;
    }
    axios({
      method: 'post',
      url: url,
      data: {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      },
      headers: {
        "Content-Type": "application/json"
      }
    })
      .catch(err => {
        console.log(err);
        alert("Authentication failed, please try again!");
        dispatch(uiStopLoading());
      })
      .then(parsedRes => {
        dispatch(uiStopLoading());
        console.log('Hiiiiiiii' + parsedRes.data);
        if (!parsedRes.data.idToken) {
          alert("Authentication failed, please try again!");
        } else {
          console.log('Testing' + parsedRes);
          dispatch(
            authStoreToken(
              parsedRes.data.idToken,
              parsedRes.data.expiresIn,
              parsedRes.data.refreshToken,
              parsedRes.data.localId
            )
          );
          goHome();
        }
      });
  };
};

export const authStoreToken = (token, expiresIn, refreshToken, uid) => {
  return dispatch => {
    const now = new Date();
    const expiryDate = now.getTime() + expiresIn * 1000;
    dispatch(authSetToken(token, expiryDate, uid));
    AsyncStorage.setItem("ap:auth:token", token);
    AsyncStorage.setItem("ap:auth:expiryDate", expiryDate.toString());
    AsyncStorage.setItem("ap:auth:refreshToken", refreshToken);
    AsyncStorage.setItem("ap:auth:uid", uid);
  };
};

export const authSetToken = (token, expiryDate, uid) => {
  return {
    type: AUTH_SET_TOKEN,
    token: token,
    expiryDate: expiryDate,
    uid: uid
  };
};

export const authSetTokenOnly = (token) => {
  return {
    type: AUTH_SET_TOKEN_ONLY,
    token: token
  }
}

export const authSetUidOnly = (uid) => {
  return {
    type: AUTH_SET_UID_ONLY,
    uid: uid
  }
}

export const authGetToken = () => {
  return (dispatch, getState) => {
    const promise = new Promise((resolve, reject) => {
      const token = getState().auth.token;
      const expiryDate = getState().auth.expiryDate;
      if (!token || new Date(expiryDate) <= new Date()) {
        let fetchedToken;
        AsyncStorage.getItem("ap:auth:token")
          .catch(err => reject())
          .then(tokenFromStorage => {
            fetchedToken = tokenFromStorage;
            if (!tokenFromStorage) {
              reject();
              return;
            }
            return AsyncStorage.getItem("ap:auth:expiryDate");
          })
          .then(expiryDate => {
            const parsedExpiryDate = new Date(parseInt(expiryDate));
            const now = new Date();
            if (parsedExpiryDate > now) {
              dispatch(authSetTokenOnly(fetchedToken));
              resolve(fetchedToken);
            } else {
              reject();
            }
          })
          .catch(err => reject());
      } else {
        resolve(token);
      }
    });
    return promise
      .catch(err => {
        return AsyncStorage.getItem("ap:auth:refreshToken")
          .then(refreshToken => {
            return axios(
              {
                method: 'post',
                url: "https://securetoken.googleapis.com/v1/token?key=" + API_KEY,
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded"
                },
                body: "grant_type=refresh_token&refresh_token=" + refreshToken
              }
            );
          })
          .then(parsedRes => {
            if (parsedRes.id_token) {
              console.log("Refresh token worked!");
              dispatch(
                authStoreToken(
                  parsedRes.id_token,
                  parsedRes.expires_in,
                  parsedRes.refresh_token,
                  parsedRes.localId
                )
              );
              return parsedRes.id_token;
            } else {
              dispatch(authClearStorage());
            }
          });
      })
      .then(token => {
        if (!token) {
          throw new Error();
        } else {
          return token;
        }
      });
  };
};

export const authAutoSignIn = () => {
  return dispatch => {
    dispatch(authGetToken())
      .then(token => {
        goHome();
      })
      .catch(err => {
        console.log("Failed to fetch token!")
        goToAuth();
      });
  };
};

export const authClearStorage = () => {
  return dispatch => {
    AsyncStorage.removeItem("ap:auth:token");
    AsyncStorage.removeItem("ap:auth:expiryDate");
    AsyncStorage.removeItem("ap:auth:refreshToken");
    return AsyncStorage.removeItem("ap:auth:uid");
  };
};

export const authSignOut = () => {
  return dispatch => {
    dispatch(authClearStorage()).then(() => {
      goToAuth();
    });
    dispatch(authRemoveToken());
  };
};

export const authRemoveToken = () => {
  return {
    type: AUTH_REMOVE_TOKEN
  };
};   

export const getUserId = () => {
  return dispatch => {
    AsyncStorage.getItem("ap:auth:uid")
    .then((uid) => {      
      dispatch(authSetUidOnly(uid));
    })
    .catch((err) => {
      console.log(err);
    });
  };
};