import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Welcome() {
  return (
    <View>
      <Text style={styles.welcome}>Welcome to WFI System</Text>
      <Text
        style={styles.admin}>
      </Text>
    </View>
  )
}
  
const styles = StyleSheet.create({
  welcome: {
    fontSize: 23,
    textAlign: 'center',  
    margin: 6,
    fontWeight: 'bold',
    bottom: 185,
  },
  admin: {
    fontSize: 15,
    textAlign: 'center',  
    color: "lightblue",
    margin: 6,
    fontWeight: 'bold',
    bottom: 200,
    
  }
})