import React from 'react';
import { TextInput } from 'react-native';
const apiClientService = require('../ApiClientService');
const styles = require('./style');

function SearchBar(props) {
  return (
    <TextInput
      style={styles.textinput}
      onChangeText={(text) => props.setText(text)}
      value={props.value}
      placeholder={' Search the guide...'}
      placeholderTextColor={'#1b401b'}
      selectionColor={'#94d494'}
      onSubmitEditing={() => {
        props.setSearchResultToggle(true);
        props.setMenuToggle(false);
        props.setDisplayText('Loading...');
        apiClientService.search(props.value, props.setDisplayText);
        console.log(props.value);
        props.setText('');
        // props.goToTop();
      }}
    />
  );
}
export default SearchBar;
