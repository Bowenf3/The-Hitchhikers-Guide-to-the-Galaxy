import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Audio } from 'expo-av';
import MenuButton from '../../MenuButton';
import Slider from '@react-native-community/slider';

const CrisisSounds = {
  0: require('../../../assets/alarm0.mp3'),
  1: require('../../../assets/alarm1.mp3'),
  2: require('../../../assets/alarm5.mp3'),
  3: require('../../../assets/alarm4.mp3'),
  4: require('../../../assets/alarm2.mp3'),
  5: require('../../../assets/alarm6.mp3'),
};

const text = ' Crisis Level:';

const soundObject = new Audio.Sound();

function CrisisInducer(props) {
  const [timerOne, setTimerOne] = useState(0);
  const [timerOneRunning, setTimerOneRunning] = React.useState(false);
  const [inputOneMins, setInputOneMins] = React.useState('');
  const [inputOneSecs, setInputOneSecs] = React.useState('');
  const [timerOnePaused, setTimerOnePaused] = React.useState(true);
  const [reseted, setReseted] = React.useState(true);
  const [crisisLevel, setCrisisLevel] = React.useState(0);

  const minutesOne = Math.floor(timerOne / 60);
  const secondsOne = Math.floor(timerOne % 60);

  useEffect(() => {
    if (timerOne > 0 && timerOneRunning) {
      let timer = setTimeout(() => {
        setTimerOne((timerOne) => timerOne - 1);
        if (timerOne === 1) {
          alert('Crisis complete');
          handleReset();
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [timerOne, timerOneRunning]);

  useEffect(
    () => async () => {
      return await stopSound();
    },
    [],
  );

  const playSound = async (crisisNumber) => {
    const status = {
      shouldPlay: false,
      isLooping: true,
    };
    try {
      let source = CrisisSounds[crisisNumber];
      await soundObject.loadAsync(source, status, false);
      await soundObject.playAsync().catch((error) => {
        console.log(error);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const unpauseSound = async () => {
    await soundObject.playAsync();
  };

  const stopSound = async () => {
    await soundObject.unloadAsync();
  };

  const pauseSound = async () => {
    await soundObject.pauseAsync();
  };

  const handleReset = () => {
    setTimerOne(Number(inputOneMins) * 60 + Number(inputOneSecs));
    setReseted(true);
    setTimerOneRunning(false);
    stopSound();
  };

  const check = (number) => {
    number = number.split(' ').join('');
    if (isNaN(number * 1)) {
      return 0;
    } else {
      return number * 1;
    }
  };

  return (
    <View
      style={{
        height: '100%',
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          color: '#94d494',
          textShadowColor: '#66FF66',
          textShadowRadius: 20,
          fontSize: 30,
          textAlign: 'center',
          fontFamily: 'monospace',
          marginBottom: 10,
        }}
      >
        Duration:
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 30,
        }}
      >
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
          onChangeText={(number) => setInputOneMins(String(check(number)))}
          onFocus={() => {
            setInputOneMins('');
          }}
          value={String(inputOneMins)}
          keyboardType={'phone-pad'}
          placeholder={'mins'}
          placeholderTextColor={'#1b401b'}
          selectionColor={'#94d494'}
        />
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
          onChangeText={(number) => setInputOneSecs(String(check(number)))}
          onFocus={() => {
            setInputOneSecs('');
          }}
          value={String(inputOneSecs)}
          keyboardType={'phone-pad'}
          placeholder={'secs'}
          placeholderTextColor={'#1b401b'}
          selectionColor={'#94d494'}
        />
      </View>
      <Text
        style={{
          color: '#94d494',
          textShadowColor: '#66FF66',
          textShadowRadius: 20,
          fontSize: 30,
          textAlign: 'center',
          fontFamily: 'monospace',
        }}
      >
        Time Remaining:
      </Text>
      <Text
        style={{
          color: '#94d494',
          textShadowColor: '#66FF66',
          textShadowRadius: 20,
          fontSize: 30,
          textAlign: 'center',
          fontFamily: 'monospace',
        }}
      >
        {formatTime(minutesOne)}:{formatTime(secondsOne)}
      </Text>
      <Text
        style={{
          color: '#94d494',
          textShadowColor: '#66FF66',
          textShadowRadius: 20,
          fontSize: 30,
          textAlign: 'center',
          fontFamily: 'monospace',
        }}
        title={'Crisis'}
      >
        {text} {crisisLevel}
      </Text>
      <Slider
        style={{ width: 300, height: 80 }}
        minimumValue={0}
        maximumValue={5}
        onSlidingComplete={(value) => setCrisisLevel(value)}
        step={1}
        minimumTrackTintColor="#1CC625"
        maximumTrackTintColor="green"
        thumbTintColor="green"
      />
      <View
        style={{
          height: 100,
          width: 100,
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}
      >
        {reseted && (
          <Button
            style={{ padding: 40, margin: 1, fontFamily: 'monospace' }}
            color={'green'}
            title={'Start'}
            onPress={(e) => {
              if (
                (inputOneMins === '0' && inputOneSecs === '0') ||
                (inputOneMins === '' && inputOneSecs === '0') ||
                (inputOneMins === '0' && inputOneSecs === '') ||
                (inputOneMins === '' && inputOneSecs === '')
              ) {
                alert(
                  'Hi there!! This is Eddie your shipboard computer!\n\nPlease input a value to the timers!\n\nShare and Enjoy!',
                );
              } else {
                setTimerOnePaused(false);
                setTimerOneRunning(true);
                setReseted(false);
                setTimerOne(Number(inputOneMins) * 60 + Number(inputOneSecs));
                playSound(crisisLevel);
              }
            }}
          />
        )}
        {!reseted && (
          <Button
            style={{ padding: 40, margin: 1, fontFamily: 'monospace' }}
            color={'green'}
            title={timerOnePaused ? 'Unpause' : 'Pause'}
            onPress={(e) => {
              if (timerOnePaused) {
                setTimerOneRunning(true);
                setTimerOnePaused(false);
                unpauseSound();
              } else {
                setTimerOneRunning(false);
                setTimerOnePaused(true);
                pauseSound();
              }
            }}
          />
        )}
        <Button
          style={{ padding: 40, margin: 1, fontFamily: 'monospace' }}
          color={'green'}
          title={'Reset'}
          onPress={handleReset}
        />
      </View>
      <View style={{ position: 'absolute', bottom: 5 }}>
        <MenuButton
          setMenuToggle={props.setMenuToggle}
          setOtherToggle={props.setOtherToggle}
        />
      </View>
    </View>
  );
}
export default CrisisInducer;

function formatTime(unit) {
  const leadingZero = unit < 10 ? '0' : '';

  return leadingZero + unit.toString();
}
