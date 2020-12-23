import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Dimensions, ScrollView,Image } from 'react-native';
import MainList from './components/MainList';
import * as Animatable from 'react-native-animatable';

export default function App() {

  return (
    <ScrollView style={{    flex: 1,
      backgroundColor: '#ddb892',}}>
       <View style={styles.headerContainer}>
        <Text style={styles.headerText}>השתלמות רס״פים</Text>
      </View>

      <MainList/>

      <Image
        style={styles.rasapImage}
        source={require('./assets/rasap.png')}
      />

</ScrollView>  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer:{
    flex:0.4,
    justifyContent:'center',
    alignContent:'center',
    backgroundColor:'#7f5539',
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.27,
shadowRadius: 4.65,

elevation: 6,
  },
  headerText:{
    fontWeight:'bold',
    padding:10,
    fontSize:80,
    alignSelf:'center',
    color:'#ede0d4'
  },
  rasapImage:{
    marginTop:20,
    width:148,
    height:200,
    alignSelf:'center'
  }
});
