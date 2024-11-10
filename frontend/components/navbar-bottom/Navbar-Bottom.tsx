import React from 'react'
import { StyleSheet, View, Text } from 'react-native';

const NavbarBottom: React.FC = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello</Text>
      </View>
    );
  };

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',  // Full width for the container
      height: '20%',
    },
});

export default NavbarBottom;