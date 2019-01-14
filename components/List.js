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
							<ListItem uri={item.hash} name={item.name} size={item.size} navigate={props.navigate} />   
						</View>
					)
				}}
			/>
		</View>	 
	);
		
}



export default List;