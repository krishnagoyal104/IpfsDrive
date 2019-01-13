import React from 'react';
import {View, Text, FlatList} from 'react-native';
import ListItem from './ListItem'; 

const List = (props) => {
	

	return(  

		<View>
			<FlatList 
				data={props.images}
				renderItem={({item}) => {
					return(
						<View>
							<ListItem uri={props.uri} name={props.name} time={props.time} />   
						</View>
					)
				}}
			/>
		</View>	 
	);
		
}



export default List;