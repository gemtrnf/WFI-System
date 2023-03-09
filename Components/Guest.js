import { StyleSheet, Text, TouchableOpacity, } from 'react-native'
import React from 'react'
import MainScreen from '../Screens/MainScreen';

//navigation
import { NavigationContainer, useNavigation } from '@react-navigation/native';


export default function Guest(){
  const navigation = useNavigation();
  return (
      <NavigationContainer>
      <TouchableOpacity onPress={() => navigation.navigate(MainScreen)}
      style={styles.design}>
      <Text style={styles.logguest}>
        Login as Guest</Text>
      </TouchableOpacity>   
      </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  logguest: {
    fontSize: 18,
    backgroundColor: "gray",
    paddingVertical: 13,
    paddingHorizontal: 30,
    borderRadius: 70,
 
  },
  design: {
    alignItems: "center", 
    justifyContent: "center",
    marginTop: 10,
    top: 580,
  },
  acc: {
    fontWeight: "bold",
    },
    link: {
        color: "lightblue",
    }
});