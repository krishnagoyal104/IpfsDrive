import React from 'react';
import {View, Text, FlatList} from 'react-native';
import ListItem from './ListItem'; 

const List = (props) => {
	

	return(  

			<FlatList 
				data={props.images}
				renderItem={({item}) => {
					return(
							<ListItem uri={item.hash} name={item.name} size={item.size} navigate={props.navigate} />   
					);
				}}
			/>
			
	);
		
}



export default List;