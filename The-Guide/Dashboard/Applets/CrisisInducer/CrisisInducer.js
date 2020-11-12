import React from 'react';
import CountDown from 'react-native-countdown-component';
import { View, Button } from 'react-native';

function CrisisInducer(props) {
  const [duration, setDuration] = React.useState(0);
  const [delay, setDelay] = React.useState(0);
  const [crisisLevel, setCrisisLevel] = React.useState(0);
  const [running, setRunning] = React.useState(false);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
      }}
    >
      <CountDown
        running={running}
        until={duration}
        onFinish={() => alert('finished')}
        onPress={() => alert('hello')}
        size={30}
        digitStyle={{ backgroundColor: 'green' }}
        digitTxtStyle={{ color: '#1CC625' }}
        timeLabelStyle={{ color: 'green' }}
      />
      <CountDown
        running={running}
        until={delay}
        onFinish={() => alert('finished')}
        onPress={() => alert('hello')}
        size={30}
        digitStyle={{ backgroundColor: 'green' }}
        digitTxtStyle={{ color: '#1CC625' }}
        timeLabelStyle={{ color: 'green' }}
      />
      <Button title={'Start'}>Start</Button>
      <Button title={'Pause'}>Pause</Button>
      <Button title={'Reset'}>Reset</Button>
    </View>
  );
}
export default CrisisInducer;
