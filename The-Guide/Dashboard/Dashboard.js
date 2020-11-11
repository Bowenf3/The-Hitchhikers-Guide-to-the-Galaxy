import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
const styles = require('./style');

import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import MenuButton from './MenuButton';

function Dashboard({ navigation }) {
  const [value, onChangeText] = React.useState('');
  const [display, onDisplayText] = React.useState('');
  const scroll = React.useRef();

  const goToTop = () => {
    scroll.current.scrollTo({ y: 0, animated: true });
  };

  return (
    <View style={styles.view}>
      <LinearGradient
        style={styles.background}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={[
          'black',
          '#0c1c0c',
          '#102610',
          '#132e13',
          '#1b401b',
          '#132e13',
          '#102610',
          '#0c1c0c',
          'black',
        ]}
      >
        <SearchBar
          onChangeText={onChangeText}
          value={value}
          onDisplayText={onDisplayText}
          goToTop={goToTop}
        />
        <SearchResult scroll={scroll} display={display} />
        {/* <MenuButton /> */}
        <StatusBar translucent={true} backgroundColor={'transparent'} />
      </LinearGradient>
    </View>
  );
}

export default Dashboard;
