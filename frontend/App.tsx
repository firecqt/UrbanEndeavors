import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import HomeScreen from './app/HomeScreen'; // Import the HomeScreen component

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content"/>
      <HomeScreen /> {/* Render the HomeScreen component */}
    </SafeAreaView>
  );
}