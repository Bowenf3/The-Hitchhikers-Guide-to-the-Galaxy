import React, { useEffect } from 'react';
import CountDown from 'react-native-countdown-component';
import Slider from '@react-native-community/slider';
import { View, Button, Text } from 'react-native';
import MenuButton from '../../MenuButton';
import { TextInput } from 'react-native-gesture-handler';
import Timer from './Timer';

function CrisisInducer(props) {
  const [delay, setDelay] = React.useState(5); //value of delay counter
  const [duration, setDuration] = React.useState(10); // value of duration counter
  const [crisisLevel, setCrisisLevel] = React.useState(0);
  const [delayRunning, setDelayRunning] = React.useState(false); //is delay timer active?
  const [durationRunning, setDurationRunning] = React.useState(false); //is duration timer active?
  const [reset, setReset] = React.useState([]); //initial delay and duration timer values
  const [firstTime, setFirstTime] = React.useState(true); //values we'll have to reset to
  const [delayTime, setDelayTime] = React.useState(0); //input form state
  const [durationTime, setDurationTime] = React.useState(0); //input form state
  const [test, setTest] = React.useState(1);

  // console.log('delay', delay);
  // console.log('duration', duration);
  // console.log('reset', reset);
  // console.log('delayRunning', delayRunning);

  // console.log('test', test);

  // useEffect(()=> {

  // },[])

  const handleReset = (e) => {
    setDelay((delay) => reset[0]); //this works
    setDuration((duration) => reset[1]); //this works
    setTest(test + 1);
    setDelayRunning(false);
  };

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
          value={String(delayTime)}
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
          value={String(durationTime)}
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
      {/* <CountDown
        id={String(test)}
        running={delayRunning}
        until={delay} //value it will count down until
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
      /> */}
      <Timer id={0} time={delay} isActive={delayRunning} setDelay={setDelay} />
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
                setReset(() => [delay, duration]);
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
            onPress={handleReset}
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
