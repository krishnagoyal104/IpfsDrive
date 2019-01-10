import React from 'react';
import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import SignInScreen from './screens/SignIn';
import SignUpScreen from './screens/SignUp';
import configureStore from './store/configureStore';

const store = configureStore();

Navigation.registerComponentWithRedux('ipfs.SignInScreen', () => SignInScreen, Provider, store);
Navigation.registerComponentWithRedux('ipfs.SignUpScreen', () => SignUpScreen, Provider, store);

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
