import React from  'react';
import Image from '../components/Image';

class ImageScreen extends React.Component{

	constructor(props){
		super(props);
	}

	render(){

		return(

			<Image hash={this.props.uri} />

		);

	}

}       

export default ImageScreen;