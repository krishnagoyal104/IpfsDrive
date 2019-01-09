import React from 'react';
import {View, Text, Button} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

class SignInScreen extends React.Component{

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

	render(){

		return(
			<View>
				<Button title='Press' onPress={this.goToSignInScreen} />
				<Text>Welcome to SignInScreen</Text>
				<Icon name="md-more" size={30} color="#333" />
			</View>
		);

	}

}

export default SignInScreen;