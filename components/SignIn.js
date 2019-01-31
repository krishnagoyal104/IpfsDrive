import React from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator} from 'react-native';

class SignInPage extends React.Component{

	constructor(props){

		super(props);

		this.state = {
			color1: 'white',
			color2: 'white',
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
				<View style={styles.topBox} >

					<TextInput style={styles.textInput} selectionColor={'red'} 
						underlineColorAndroid={this.state.color1} 
						placeholder={'Email'} placeholderTextColor={this.state.color1} 
						onFocus={() => this.setState({color1: 'red'})}
						onBlur={() => this.setState({color1: 'white'})}
						onChangeText={val => this.onEmailChange(val)} 
					/>

					<TextInput style={styles.textInput} selectionColor={'red'} 
						underlineColorAndroid={this.state.color2}
						placeholder={'Password'} placeholderTextColor={this.state.color2}  
						onFocus={() => this.setState({color2: 'red'})}
						onBlur={() => this.setState({color2: 'white'})}
						onChangeText={val => this.onPasswordChange(val)}
						secureTextEntry={true}
					/>

					{  
	          this.props.ui ?  
	          <ActivityIndicator size="small" color="red" /> :  	
	          (		      
							<TouchableOpacity style={styles.loginContainer} onPress={() => this.signIn()} >
								<Text style={styles.login} >Login</Text>
							</TouchableOpacity> 
						)
		      }
					
				</View>	
				<View style={styles.bottomBox} >
				</View>	
			</View>			

		);

	}	

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFA000',
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
		color: 'white',
		height: 50,
		width: '80%',
		fontSize: 18
	},
	loginContainer: {
		height: 40,
		width: '80%',
		backgroundColor: 'red',
		alignItems: 'center',
		justifyContent: 'center'
	},
	login: {
		color: 'white',
		fontSize: 20
	}
});

export default SignInPage;