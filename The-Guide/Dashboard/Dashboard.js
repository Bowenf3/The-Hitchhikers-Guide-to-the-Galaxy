import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native-gesture-handler';
const styles = require('./style');

import SearchBar from './SearchBar';

function Dashboard({ navigation }) {
  const [value, onChangeText] = React.useState('');
  const [display, onDisplayText] = React.useState('');
  const scroll = React.useRef();

  const goToTop = () => {
    scroll.current.scrollTo({ y: 0, animated: true });
  };

  return (
    <View style={styles.view}>
      <SearchBar
        onChangeText={onChangeText}
        value={value}
        onDisplayText={onDisplayText}
        goToTop={goToTop}
      />
      <ScrollView ref={scroll} style={styles.scrollview}>
        <Text style={styles.text}>{display}</Text>
      </ScrollView>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
    </View>
  );
}

export default Dashboard;
