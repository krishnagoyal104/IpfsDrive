import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Dimensions, ProgressBarAndroid} from 'react-native';
import {connect} from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import {Navigation} from 'react-native-navigation';
import List from  '../components/List';
import Icon from 'react-native-vector-icons/Ionicons';
import {startAddImage, startLoadImages} from '../actions/images';

const options = {
	  title: 'Select Avatar',
	  storageOptions: {
	    skipBackup: true,
	    path: 'images',
	  },
	};

class ListScreen extends React.Component{

	constructor(props){
		super(props);
	}

	componentWillMount(){
		this.props.dispatch(startLoadImages());
	}

	goToImageScreen = (uri) => {
		Navigation.push(this.props.componentId, {
			component: {
				name: 'ipfs.ImageScreen',       
				passProps:{
				uri: uri
				}
			}, 				                                                 
		});
	}

	pickImage = () => {
		ImagePicker.showImagePicker(options, (response) => {
		  	console.log('Response = ', response);

		    if (response.didCancel) {
		    	console.log('User cancelled image picker');
		  	} else if (response.error) {
		    	console.log('ImagePicker Error: ', response.error);
		  	} else if (response.customButton) {
		    	console.log('User tapped custom button: ', response.customButton);
		  	} else {  

		    	const pic = {
		      		uri: response.uri,
				    type: 'image/jpeg',
				    name: response.fileName 
				}

	      		const imageData = new FormData();
	      		imageData.append('file', pic);

	      		this.props.dispatch(startAddImage(imageData));

		  	}
		});
	}		

  	render() {

		return (

			<View>
			<List images={this.props.images.images} navigate={this.goToImageScreen} />
			<TouchableOpacity style={styles.icon} onPress={() => this.pickImage() } >							
				<Icon name="md-add-circle" size={55} color="#007ee5" />				
			</TouchableOpacity>
			{
				this.props.progress.progress && this.props.progress.progress!==1 && 
				<ProgressBarAndroid
					style={styles.progressBar}
		            styleAttr="Horizontal"
		            indeterminate={false}
		            progress={this.props.progress.progress}
		    />
	    }    
			</View>
		);

  }

}

const styles = StyleSheet.create({ 
	icon: {
		position: 'absolute',
		marginTop: Dimensions.get('window').height * 70/100,
		marginLeft: Dimensions.get('window').width * 80/100		
	},
	progressBar: {
		width: '80%',
		alignSelf: 'center',
		position: 'absolute',
		marginTop: Dimensions.get('window').height * 80/100,
	}
});

const mapStateToProps = (state) => {
	return{
		images: state.images,
		progress: state.progress 
	};
};

export default connect(mapStateToProps)(ListScreen);