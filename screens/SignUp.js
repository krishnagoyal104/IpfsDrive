import React from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Navigation} from 'react-native-navigation';
import { Container, Header, Content, Text, Form, Item, Input, Label, Button } from 'native-base';   
import SignUpPage from '../components/SignUp';
import {tryAuth, authGetToken} from '../actions/auth';

class SignUpScreen extends React.Component {

  constructor(props){
    super(props);
  }

  render() {

    return (
      <SignUpPage onSubmit={(object) => 
        this.props.dispatch(tryAuth(object, "signup"))
      } 
      />  
    );
  }
}

export default connect()(SignUpScreen);

