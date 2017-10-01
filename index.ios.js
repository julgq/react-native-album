
// Import a Library to help create component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


// Create a component
const App = () => (
  <View style={styles.ScrollFlex}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

const styles = {
  ScrollFlex: {
    flex: 1,
  },
};

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
