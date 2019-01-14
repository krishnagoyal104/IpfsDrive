import React from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const ListItemComponent = (props) => {

	return(
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://gateway.ipfs.io/ipfs/QmUQC3SEusHXMMxj21ayfdTKVp3zCxcBPxg78fcdhAhLN6' }} />
              </Left>
              <Body>
                <Text numberOfLines={1}>{props.name}</Text>
                <Text note numberOfLines={1}>{props.size}</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Icon name="md-more" size={30} color="#333" />
                </Button>
              </Right>
            </ListItem>
          </List>
	);

}

export default ListItemComponent;