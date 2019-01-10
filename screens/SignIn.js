import React from 'react';
import {View, Text, Button} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import {tryAuth, authGetToken} from '../actions/auth';

class SignInScreen extends React.Component{

	constructor(props){
		super(props);
	}

	componentWillMount(){
		this.props.dispatch(authGetToken());
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
				<Text>Welcome Here</Text>
				<Button title='Press' onPress={
					() => this.props.dispatch(tryAuth({email: 'kjxnvxckj@gmail.com', password:'123456'}, 'signup'))
				} />
				<Icon name="md-more" size={30} color="#333" />
			</View>
		);

	}

}

const mapStateToProps = (state) => {
	return{
		auth: state.auth 
	};
};

export default connect(mapStateToProps)(SignInScreen);