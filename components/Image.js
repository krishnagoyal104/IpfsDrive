import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';

const ImageView = (props) => {
	

	return(
			
			<Image source={{uri: `https://gateway.ipfs.io/ipfs/${props.hash}`}} style={styles.image} resizeMode={'contain'} />
		
	);
		
}

const styles = StyleSheet.create({
	
	image: {
		height: Dimensions.get('window').height,
		width: '100%'
	}

});



export default ImageView;