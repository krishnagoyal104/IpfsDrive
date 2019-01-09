import React from 'react';
import {Navigation} from 'react-native-navigation';
import SignInScreen from './screens/SignIn';
import SignUpScreen from './screens/SignUp';

Navigation.registerComponent('ipfs.SignInScreen', () => SignInScreen);
Navigation.registerComponent('ipfs.SignUpScreen', () => SignUpScreen);

Navigation.events().registerAppLaunchedListener(() => {

  Navigation.setRoot({
    root: {
      stack: {
        id: 'AuthStack',
        children: [
          {
            component: {
              name: 'ipfs.SignInScreen',            
            }
          }
        ],
      }
    }
  });

});
