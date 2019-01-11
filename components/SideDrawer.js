import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {goHome} from '../App';

const SideDrawer = (props) => {
	

	return(

		<View style={styles.container}>
			<TouchableOpacity onPress={goHome}>
				<Text style={styles.font}>Home</Text>
			</TouchableOpacity>
			<TouchableOpacity>
				<Text style={styles.font}>Settings</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={props.signOut}>
				<Text style={styles.font}>Log Out</Text>
			</TouchableOpacity>
		</View>
		
	);
		
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'rgba(255,74,86,1)',
		justifyContent: 'center',
		alignItems: 'center'
	},
	font: {
		padding: 25,
		fontSize: 25
	} 
});





export default SideDrawer;