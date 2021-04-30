import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>SCHOOL ATTENDANCE</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: '#d527b7',
  },
  text:{
    color: '#e3e3e3',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default AppHeader;