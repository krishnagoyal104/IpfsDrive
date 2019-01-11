import React from 'react';
import {connect} from 'react-redux';
import {Navigation} from 'react-native-navigation';
import ImagePicker from 'react-native-image-picker';   
import SignInPage from '../components/SignIn';
import {tryAuth, authGetToken} from '../actions/auth';
import {startAddImage} from '../actions/images';

const options = {
  title: 'IPFS would like to access your gallery to upload images',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

class SignInScreen extends React.Component {

	constructor(props){
		super(props);
		/*this.state = {
			images : []
		}*/
	}

	goToSignUpScreen = () => {
		Navigation.push(this.props.componentId, {
			component: {
				name: 'ipfs.SignUpScreen'
			}
		});
	}

	pickImage = () => {
	    ImagePicker.showImagePicker(options, (response) => {

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

	      		const bodyFormData = new FormData();
	      		bodyFormData.append('file', pic); 

	      		/*this.setState((prevState) => ({
	      			images: prevState.images.concat({uri:response.uri, key:Math.random()})
	  	      		
	      		}));*/

	      		this.props.dispatch(startAddImage(bodyFormData));
      		

	        }
	          
	      }); 
  	}

  render() {

    return (
	      <SignInPage onSubmit={(object) => 
	      	this.props.dispatch(tryAuth(object))
	      } 
	      navigate={() => this.goToSignUpScreen()}
	      />   	
    );
  }
}

export default connect()(SignInScreen);

