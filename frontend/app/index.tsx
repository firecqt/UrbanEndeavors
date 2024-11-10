import React from 'react';
import { AppRegistry } from 'react-native';
import App from '../App';  // Import the App component
import { expo } from '../app.json'; // Import expo object from app.json
import { Text, View } from "react-native";
import HomeScreen from './HomeScreen';
import Map from '@/components/map/Map';
import NavbarBottom from '@/components/navbar-bottom/Navbar-Bottom';

const appName = expo.name; // Access the name property

// Register the App component to start the app
AppRegistry.registerComponent(appName, () => App);

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Map></Map>
      <NavbarBottom></NavbarBottom>
    </View>
  );
}
