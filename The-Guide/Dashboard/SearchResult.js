import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MenuButton from './MenuButton';
const styles = require('./style');

function SearchResult(props) {
  return (
    <View style={styles.searchresult}>
      <ScrollView
        fadingEdgeLength={100}
        ref={props.scroll}
        style={styles.scrollview}
      >
        <Text style={styles.text}>{props.display}</Text>
      </ScrollView>
      <MenuButton
        setMenuToggle={props.setMenuToggle}
        setSearchResultToggle={props.setSearchResultToggle}
      />
    </View>
  );
}
export default SearchResult;
