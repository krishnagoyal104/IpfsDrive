import React from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator} from 'react-native';

class SignInPage extends React.Component{

	constructor(props){

		super(props);

		this.state = {
			color1: '#C7C7DCD',
			color2: '#C7C7CD',
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

				<View style={styles.container} >
						<TextInput style={styles.textInput} selectionColor={'#007ee5'}
							autoFocus={true} 
							underlineColorAndroid={this.state.color1}  
							onFocus={() => this.setState(({color1: '#007ee5'}))}
							onBlur={() => this.setState({color1: '#C7C7CD'})}
							placeholder={'Email'}   
							onChangeText={val => this.onEmailChange(val)} 
						/>

						<TextInput style={styles.textInput} selectionColor={'#007ee5'} 
							underlineColorAndroid={this.state.color2}
							onFocus={() => this.setState(({color2: '#007ee5'}))}
							onBlur={() => this.setState({color2: '#C7C7CD'})}
							placeholder={'Password'}  
							onChangeText={val => this.onPasswordChange(val)}
							secureTextEntry={true}
						/>

						{  
		          this.props.ui ?  
		          <ActivityIndicator size="small" color='#007ee5' /> :  	
		          (		      
								<TouchableOpacity style={styles.loginContainer} onPress={() => this.signIn()} >
									<Text style={styles.login} >Login</Text>
								</TouchableOpacity> 
							)
			      }

			      <TouchableOpacity onPress={this.props.navigate} >
							<Text style={styles.text} >SIGN UP FOR IPFS</Text>
						</TouchableOpacity>	

					</View>			

		);

	}	

}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center'
	},
	topBox: {
		flex: 4,
		alignItems: 'center',
		justifyContent: 'space-evenly'
	},
	bottomBox: {
		flex:3,
	},
	textInput: {
		height: 50,
		width: '95%',
		fontSize: 18
	},
	loginContainer: {
		height: 40,
		width: '95%',
		marginTop: 6,
		backgroundColor: '#007ee5',
		alignItems: 'center',
		justifyContent: 'center'
	},
	login: {
		color: 'white',
		fontSize: 18
	},
	text: {
		fontFamily: 'Helvetica Neue',
		color: '#007ee5',
		marginTop: 20
	}
});

export default SignInPage;