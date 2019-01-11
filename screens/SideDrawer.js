import React from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import SideDrawer from '../components/SideDrawer';
import {authSignOut} from '../actions/auth';

class SideDrawerScreen extends React.Component{

	constructor(props){
		super(props);
	}

	render(){

		return(

			<SideDrawer signOut={() => this.props.dispatch(authSignOut())} />
					
		);	
	}

}

export default connect()(SideDrawerScreen);