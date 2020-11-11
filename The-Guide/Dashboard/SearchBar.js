import React from 'react';
import { TextInput } from 'react-native';
const apiClientService = require('../ApiClientService');
const styles = require('./style');

function SearchBar(props) {
  return (
    <TextInput
      style={styles.textinput}
      onChangeText={(text) => props.onChangeText(text)}
      value={props.value}
      placeholder={' Search the guide...'}
      placeholderTextColor={'#1b401b'}
      selectionColor={'#94d494'}
      onSubmitEditing={() => {
        props.onDisplayText('Loading...');
        apiClientService.search(props.value, props.onDisplayText);
        console.log(props.value);
        props.onChangeText('');
        props.goToTop();
      }}
    />
  );
}
export default SearchBar;
