import React from 'react';
import { View, TextInput } from 'react-native';
import MenuButton from './MenuButton';
const styles = require('./style');

function Calculator(props) {
  const [number, setNumber] = React.useState('0');

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TextInput
        style={{
          height: 80,
          width: '80%',
          borderColor: '#204520',
          borderWidth: 1,
          color: '#94d494',
          textShadowColor: '#66FF66',
          textShadowRadius: 20,
          textAlign: 'center',
          fontSize: 30,
        }}
        onFocus={() => {
          setNumber('');
        }}
        onChangeText={(number) => setNumber(number)}
        value={number}
        keyboardType={'phone-pad'}
        placeholder={'0'}
        placeholderTextColor={'#1b401b'}
        selectionColor={'#94d494'}
        onSubmitEditing={() => {
          setNumber('42');
          console.log(props.value);
        }}
      />
      <View style={{ position: 'absolute', bottom: 5 }}>
        <MenuButton
          setMenuToggle={props.setMenuToggle}
          setOtherToggle={props.setOtherToggle}
        />
      </View>
    </View>
  );
}
export default Calculator;
