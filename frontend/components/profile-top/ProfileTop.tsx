import React from 'react'
import { StyleSheet, View, Text } from 'react-native';

const ProfileTop: React.FC = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello</Text>
      </View>
    );
  };

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    height: '20%', // this number is 20% of page height
    padding: 10,
    backgroundColor: 'blue'
  },
  imgNameContainer: {
    flexDirection: 'column',
    flex: 1,
    //paddingRight: 3, // tweak this value
    backgroundColor: 'green'
  },
  statsContainer: {
    flexDirection: 'column',
    flex: 4,
    backgroundColor: 'black'
  }
});

export default ProfileTop;