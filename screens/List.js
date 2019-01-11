import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import List from  '../components/List';

class ListScreen extends React.Component{

	constructor(props){
		super(props);
	}

  	render() {

		return (

			<Text>Welcome to ListScreen</Text>

		);

  }

}

export default connect()(ListScreen);