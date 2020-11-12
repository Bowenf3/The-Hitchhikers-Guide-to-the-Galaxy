import React from 'react';
import CountDown from 'react-native-countdown-component';
import Slider from '@react-native-community/slider';
import { View, Button, Text } from 'react-native';
import MenuButton from '../../MenuButton';
import { TextInput } from 'react-native-gesture-handler';

function CrisisInducer(props) {
  const [delay, setDelay] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const [crisisLevel, setCrisisLevel] = React.useState(0);
  const [delayRunning, setDelayRunning] = React.useState(false);
  const [durationRunning, setDurationRunning] = React.useState(false);
  const [reset, setReset] = React.useState([]);
  const [firstTime, setFirstTime] = React.useState(true);
  const [delayTime, setDelayTime] = React.useState(0);
  const [durationTime, setDurationTime] = React.useState(0);

  console.log('delay', delay);
  console.log('duration', duration);
  console.log('reset', reset);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <View
        style={{
          // backgroundColor: 'red',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
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
          }}
          onChangeText={(number) => setDelayTime(Number(number))}
          value={delayTime}
          keyboardType={'phone-pad'}
          placeholder={'0'}
          placeholderTextColor={'#1b401b'}
          selectionColor={'#94d494'}
          onSubmitEditing={(e) => {
            setDelay(delayTime);
          }}
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
          }}
          onChangeText={(number) => setDurationTime(Number(number))}
          value={durationTime}
          keyboardType={'phone-pad'}
          placeholder={'0'}
          placeholderTextColor={'#1b401b'}
          selectionColor={'#94d494'}
          onSubmitEditing={(e) => {
            setDuration(durationTime);
          }}
        />
      </View>
      <Text title={'Delay'}>Delay</Text>
      <CountDown
        id={'1'}
        running={delayRunning}
        until={delay}
        timeToShow={['M', 'S']}
        onFinish={() => {
          setDelayRunning(false);
          setDurationRunning(true);
        }}
        onChange={(value) => {
          setDelay(value - 1);
        }}
        onPress={() => {}}
        size={30}
        digitStyle={{ backgroundColor: 'green' }}
        digitTxtStyle={{ color: '#94d494' }}
        timeLabelStyle={{ color: '#94d494' }}
      />
      <Text title={'Duration'}>Duration</Text>
      <CountDown
        id={'2'}
        running={durationRunning}
        until={duration}
        timeToShow={['M', 'S']}
        onFinish={() => {
          alert('finished');
          setDurationRunning(false);
        }}
        onChange={(value) => {
          setDuration(value - 1);
        }}
        onPress={() => alert('hello')}
        size={30}
        digitStyle={{ backgroundColor: 'green' }}
        digitTxtStyle={{ color: '#94d494' }}
        timeLabelStyle={{ color: '#94d494' }}
      />
      <Text title={'Crisis Level'}>Crisis Level</Text>
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
      <Text title={'Crisis'}>{crisisLevel}</Text>
      <View style={{ height: 40, width: 250 }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Button
            style={{ padding: 40, margin: 1 }}
            color={'green'}
            title={'Start'}
            onPress={(e) => {
              if (firstTime === true) {
                setReset([delay, duration]);
                setFirstTime(false);
              }
              if (delay === 0) {
                setDurationRunning(true);
              } else if (delay !== 0) {
                setDelayRunning(true);
              } else {
                alert('Please set a duration or delay');
              }
            }}
          >
            Start
          </Button>
          <Button
            style={{ padding: 40, margin: 1 }}
            color={'green'}
            title={'Pause'}
            onPress={(e) => {
              setDurationRunning(false);
              setDelayRunning(false);
            }}
          >
            Pause
          </Button>
          <Button
            style={{ padding: 40, margin: 1 }}
            color={'green'}
            title={'Reset'}
            onPress={(e) => {
              setDelay(reset[0]);
              setDuration(reset[1]);
            }}
          >
            Reset
          </Button>
        </View>
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
