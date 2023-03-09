import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import HomeScreen from './Home';
import DashboardScreen from './Dashboard';
import AlertScreen from './Alerts';


/* ... */
// Wrap your app with the new GestureHandler
<GestureHandlerRootView style={{ flex: 1 }}>
  /your app */* 
</GestureHandlerRootView>


const Drawer = createDrawerNavigator();

export default function MainScreen({}) {
    return (
        <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" 
          drawerContent={({navigation})=> (<DrawerComponent navigation ={navigation} /> 
          )}>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Dashboard" component={DashboardScreen} />
          <Drawer.Screen name="Alerts" component={AlertScreen} />
        </Drawer.Navigator>
        </NavigationContainer>
    );
    
  } 
