import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage
} from 'react-native';
import {connect} from 'react-redux';
import  {authAutoSignIn} from '../actions/auth';

class InitializeScreen extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(authAutoSignIn());
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Loading</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 28
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default connect()(InitializeScreen);