import React from 'react';
import { View, Text, TextInput } from 'react-native';
import MenuButton from '../../MenuButton';

function BabelFish(props) {
  const [toTranslate, setToTranslate] = React.useState('');

  return (
    <View>
      <Text>Babel Fish</Text>

      <TextInput
        style={{
          height: 80,
          width: 100,
          borderColor: '#204520',
          borderWidth: 1,
          color: '#94d494',
          textShadowColor: '#66FF66',
          textShadowRadius: 20,
          textAlign: 'center',
          fontSize: 30,
          fontFamily: 'monospace',
        }}
        onChangeText={(text) => setToTranslate(text)}
        onSubmitEditing={() => {}}
        onFocus={() => {
          setToTranslate('');
        }}
        value={toTranslate}
        placeholder={'Enter text to translate'}
        placeholderTextColor={'#1b401b'}
        selectionColor={'#94d494'}
      />
      <MenuButton
        setMenuToggle={props.setMenuToggle}
        setOtherToggle={props.setOtherToggle}
      />
    </View>
  );
}
export default BabelFish;
