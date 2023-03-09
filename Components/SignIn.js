import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function SignIn() {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.SignIn}>Login as Admin</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center", 
    justifyContent: "center",
    marginTop: 10,
    top: 65,
    
    
  },
  SignIn: {
    fontSize: 18,
    backgroundColor: "gray",
    paddingVertical: 13,
    paddingHorizontal: 30,
    borderRadius: 70,
    color: "white",
    backgroundColor: "black"
  }
 
});