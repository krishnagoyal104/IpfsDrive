import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ImageView = (props) => {
	

	return(

		<View style={styles.container} >			
			<Image source={{uri: `https://gateway.ipfs.io/ipfs/${props.hash}`}} style={styles.image} />
		</View>	
		
	);
		
}

const styles = StyleSheet.create({

	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'black' 
	},
	
	image: {
		height: '60%',
		width: '80%'
	}

});



export default ImageView;