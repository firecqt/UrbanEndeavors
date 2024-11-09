import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GOOGLE_MAPS_API_KEY } from '@env';

// Define the functional component
const Map: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello from MyComponent!</Text>
    </View>
  );
};

// Add some styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
});

// Export the component so it can be used in other files
export default Map;