import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from "../App"; // Use named import for types
import Map from '@/components/map/Map';
import NavbarBottom from '@/components/navbar-bottom/Navbar-Bottom';

type HomeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenProp>();

  return (
    <View style={styles.container}>
      <Map></Map>
      <NavbarBottom></NavbarBottom>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
