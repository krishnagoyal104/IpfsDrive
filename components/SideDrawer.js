import React, { Component } from 'react';
import {TouchableOpacity} from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Icon, Button, Left, Body, Right, Switch } from 'native-base';

const SideDrawer = (props) => {  

    return (
      <Container>
        <Header />
        <Content>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="home" />
              </Button>  
            </Left>
            <Body>
            <TouchableOpacity onPress={props.goHome} >
              <Text>Home</Text>
            </TouchableOpacity>  
            </Body>   
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="ios-settings" />
              </Button>
            </Left>
            <Body>
            <TouchableOpacity>
              <Text>Settings</Text>
            </TouchableOpacity>  
            </Body>            
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "green" }}>
                <Icon active name="contact" />
              </Button>
            </Left>
            <Body>
            <TouchableOpacity onPress={props.signOut} >
              <Text>Logout</Text>
            </TouchableOpacity> 
            </Body>
          </ListItem>
        </Content>
      </Container>
    );
}

export default SideDrawer;  