import React from 'react';
import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import SignInScreen from './screens/SignIn';
import SignUpScreen from './screens/SignUp';
import ListScreen from './screens/List';
import InitializeScreen from './screens/Initialize';
import SideDrawerScreen from './screens/SideDrawer';
import ImageScreen from './screens/Image';
import configureStore from './store/configureStore';


const store = configureStore();

Navigation.registerComponentWithRedux('ipfs.InitializeScreen', () => InitializeScreen, Provider, store);
Navigation.registerComponentWithRedux('ipfs.SignInScreen', () => SignInScreen, Provider, store);
Navigation.registerComponentWithRedux('ipfs.SignUpScreen', () => SignUpScreen, Provider, store);
Navigation.registerComponentWithRedux('ipfs.ListScreen', () => ListScreen, Provider, store);
Navigation.registerComponentWithRedux('ipfs.SideDrawerScreen', () => SideDrawerScreen, Provider, store);
Navigation.registerComponent('ipfs.ImageScreen', () => ImageScreen);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'ipfs.InitializeScreen'
      }
    }
  });
});

 export const goToAuth = () => Navigation.setRoot({
    root: {
      stack: {
        id: 'AuthStack',
        children: [
          {
            component: {
              name: 'ipfs.SignInScreen',  
              options: {
              topBar: {
                background: {
                  color: '#F57C00'
                },
                title: {
                  text: 'IPFS APP',
                  alignment: 'center',
                  color: 'white'
                }
              } 
            }          
            },
          }
        ],
      }
    }
  });

export const goHome = () => Navigation.setRoot({
  root: {
    sideMenu:{
      left: {
    component: {
      name: 'ipfs.SideDrawerScreen', 
    }
  },
  center: {
    stack: {
      options: {
            topBar: {
              background: {
                  color: '#3F51B5'
                },
              title: {     
                text: 'Home', 
                alignment: 'center',
                color: 'white'            
              }
            }
          },
      children: [{
        component: {
          name: 'ipfs.ListScreen',
        }
      }]
    }
  },
  options: {
     sideMenu: {
      left: {
       width: 250,      
       },
     },
    }
  }
 }
});
