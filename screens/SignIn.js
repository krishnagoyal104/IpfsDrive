import React, { Component } from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Navigation} from 'react-native-navigation';
import { Container, Header, Content, Text, Form, Item, Input, Label, Button } from 'native-base';   
import SignInPage from '../components/SignIn';
import {tryAuth, authGetToken} from '../actions/auth';

class SignInScreen extends Component {

	constructor(props){
		super(props);
	}

	goToSignInScreen = () => {
		Navigation.push(this.props.componentId, {
			component: {
				name: 'ipfs.SignUpScreen'
			}
		});
	}

  render() {

    return (
      <SignInPage onSubmit={(object) => 
      	this.props.dispatch(tryAuth(object))
      } 
      navigate={() => this.goToSignInScreen()}
      />	
    );
  }
}

export default connect()(SignInScreen);

