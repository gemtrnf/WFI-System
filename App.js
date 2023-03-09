import * as React from 'react';
import { Button, Text, TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HeaderBackButton } from '@react-navigation/elements';
import { View, StyleSheet } from 'react-native';
//screens
import HomeScreen from './Screens/Home';
import DashboardScreen from './Screens/Dashboard';
import AlertScreen from './Screens/Alerts';
import LogsScreen from './Screens/Logs';


//components
import Guest from './Components/Guest';
import Input from './Components/Input';
import Logo from './Components/Logo';
import SignIn from './Components/SignIn';
import Welcome from './Components/Welcome';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
export default function App () {
  return (
    <View style={{ flex: 1, bgColor: "black" }}>
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{ 
        headerShown: false
      }}>
        <Stack.Screen
          
          name="Guest"
          component={GuestScreen}
        />
        <Stack.Screen name="Home" component={HomeScreen1} />
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
};

const GuestScreen = ({navigation}) => {
  return (
    <View style = {{ flex: 1, backgroundColor: `#a9a9a9`}}>
      
      <Logo/>
      <Input/>
      
      {/* <Guest/>   */}
      <SignIn/>
      <Welcome/>

      <TouchableOpacity onPress={() => navigation.navigate('Home')}
      style={styles.design}>
      <Text style={styles.logguest}>
        Login as Guest</Text>
      </TouchableOpacity>
        </View>
  );
};

const styles = StyleSheet.create({
  logguest: {
    fontSize: 18,
    backgroundColor: "black",
    paddingVertical: 13,
    paddingHorizontal: 30,
    borderRadius: 70,
    color: "white"
    
 
  },
  design: {
    alignItems: "center", 
    justifyContent: "center",
    marginTop: 10,
    bottom: 12,
  },
  acc: {
    fontWeight: "bold",
    },
    link: {
        color: "lightblue",
    }
});

const HomeScreen1 = ({navigation}) => {
  return <View style={{flex: 1 }}>
        <Drawer.Navigator initialRouteName="Home" >
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Dashboard" component={DashboardScreen} />
          <Drawer.Screen name="Alerts" component={AlertScreen} /> 
          <Drawer.Screen name="Logs" component={LogsScreen} /> 
        </Drawer.Navigator>

    </View>;
};

