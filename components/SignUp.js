import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {Container, Header, Content, Text, Form, Item, Input, Label, Button} from 'native-base';

class SignUpPage extends React.Component{

	constructor(props){

		super(props);

		this.state = {
			email: '',
			password: ''
		}
	}

	onEmailChange = (val) => {
		this.setState(() => ({
			email: val
		}));
	}

	onPasswordChange = (val) => {
		this.setState(() => ({
			password: val 
		}));
	}

	signIn = () => {

		const {email, password} = this.state;

		const object = {email, password}

		this.props.onSubmit(object);

	}
 
  	render(){

		return( 

			<Container>        
		        <Content>
		          <Form style={styles.form}>
		            <Item floatingLabel>
		              <Label>Username</Label>
		              <Input onChangeText={val => this.onEmailChange(val)} />
		            </Item>
		            <Item floatingLabel last>
		              <Label>Password</Label>
		              <Input onChangeText={val => this.onPasswordChange(val)} />
		            </Item>
		          </Form>
		          {
		          this.props.ui ? 
		     	  <ActivityIndicator size="small" color="blue" /> : 	  
		          (<Button block primary onPress={this.signIn} >
		            	<Text>Sign Up</Text>
		          </Button>)	
		      	  }
		        </Content>
		        <View style={styles.signUp}>
			        <Button transparent primary onPress={this.props.navigate} >
			            	<Text>Sign Up?</Text>
			         </Button> 
		         </View>
		      </Container>

		);

	}	

}

const styles = StyleSheet.create({
	form: {
		paddingBottom: 50
	},
	signUp: {
		paddingLeft: 260
	}
});

export default SignUpPage;