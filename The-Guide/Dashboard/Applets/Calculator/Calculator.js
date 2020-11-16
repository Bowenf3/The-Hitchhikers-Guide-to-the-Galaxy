import React, { useEffect } from 'react';
import { View, TextInput, Text } from 'react-native';
import MenuButton from '../../MenuButton';
import { Audio } from 'expo-av';
const music = require('../../../assets/DeepThoughtSound.mp3');
const soundObject = new Audio.Sound();

function Calculator(props) {
  const [number, setNumber] = React.useState('0');

  useEffect(() => {
    playSound();
  }, []);

  useEffect(
    () => () => {
      return stopSound();
    },
    [],
  );

  const playSound = async () => {
    const status = {
      shouldPlay: false,
      isLooping: true,
    };
    try {
      let source = music;
      await soundObject.loadAsync(source, status, false);
      await soundObject.playAsync().catch((error) => {
        console.log(error);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const stopSound = async () => {
    await soundObject.unloadAsync();
  };

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
      <Text
        style={{
          color: '#94d494',
          textShadowColor: '#66FF66',
          textShadowRadius: 20,
          fontSize: 25,
          textAlign: 'center',
          fontFamily: 'monospace',
          marginBottom: 20,
          width: '80%',
        }}
      >
        Trouble me not with this pocket calculator stuff...
      </Text>
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
          fontFamily: 'monospace',
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
