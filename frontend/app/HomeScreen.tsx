// HomeScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

// Function component with TypeScript syntax
const HomeScreen: React.FC = () => {
  // Function to handle button press
  const handlePress = () => {
    Alert.alert('Hello!', 'You pressed the button.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Your App</Text>
      <Button title="Press Me" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default HomeScreen;
