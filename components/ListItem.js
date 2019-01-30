import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ListItemComponent = (props) => {

	return(   
    <TouchableOpacity onPress={() => props.navigate(props.uri)}>
      <View style={styles.mainContainer} >   
        <View style={{flex: 2}} >
        <Image source={{uri: `https://gateway.ipfs.io/ipfs/${props.uri}`}} style={styles.image} progressiveRenderingEnabled={true} />
        </View>
        <View style={{flex: 5, alignItems: 'center'}} >  
        <Text numberOfLines={1} style={{fontWeight: 'bold'}}>{props.name}</Text>
        <Text>Size: {props.size}</Text>
        </View>
        <View style={{flex: 1, alignItems: 'flex-end', margin: 7}} >
        <Icon name="md-more" size={30} color="#333" />
        </View>
      </View> 
    </TouchableOpacity>   
	);

}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: Dimensions.get('window').height/10,
    width: '100%',
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center'
    
  },

  image: {
    margin: 7,
    height: '80%',
    width: '60%'
  }
});

export default ListItemComponent;