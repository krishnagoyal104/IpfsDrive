import React from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import SideDrawer from '../components/SideDrawer';
import {authSignOut} from '../actions/auth';
import {goHome} from '../App';

class SideDrawerScreen extends React.Component{

	constructor(props){
		super(props);
	}

	render(){

		return(

			<SideDrawer signOut={() => this.props.dispatch(authSignOut())} 
			 goHome={() => goHome()} />
					
		);	
	}

}

export default connect()(SideDrawerScreen);