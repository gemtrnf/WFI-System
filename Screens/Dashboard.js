import React from "react";
import {View, Image} from 'react-native'
import bgImage from '../assets/WFI.jpg'
import MyLineChart from "./LineChart";



export default function DashboardScreen({ }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <MyLineChart/>
        <Image source={bgImage} 
        style={{ flex: 1, opacity: 0.6, position:'absolute', top: 0,
        right: 0,
        bottom:0,
        left: 0,
        width: 360,
        height: 800, }}/>

      </View>
    );
  }
  
