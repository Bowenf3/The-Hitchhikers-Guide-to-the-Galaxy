import 'react-native-gesture-handler';
import React from 'react';
import { Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
const styles = require('./style');

function SearchResult(props) {
  return (
    <ScrollView
      fadingEdgeLength={100}
      ref={props.scroll}
      style={styles.scrollview}
    >
      <Text style={styles.text}>{props.display}</Text>
    </ScrollView>
  );
}
export default SearchResult;
