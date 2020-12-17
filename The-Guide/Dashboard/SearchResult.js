import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MenuButton from './MenuButton';
const styles = require('./style');

function SearchResult(props) {
  useEffect(
    () => () => {
      return props.setDisplayText('Loading...');
    },
    [],
  );

  return (
    <View style={styles.searchresult}>
      <ScrollView fadingEdgeLength={100} style={styles.scrollview}>
        <Text style={styles.text}>{props.display}</Text>
      </ScrollView>
      <MenuButton
        setMenuToggle={props.setMenuToggle}
        setOtherToggle={props.setOtherToggle}
      />
    </View>
  );
}
export default SearchResult;
