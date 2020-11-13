import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
// import formatTime from '../utils/formatTime';
// import colours from '../constants/colours';
// import { useDispatch } from 'react-redux';

const Timer = ({ id, time, isActive, setDelay }) => {
  // const dispatch = useDispatch();

  const [timeRemaining, setTimeRemaining] = useState(time);

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = Math.floor(timeRemaining % 60);

  console.log('time', time);
  console.log('time remaining', timeRemaining);

  useEffect(
    () => {
      if (timeRemaining > 0 && isActive) {
        let timer = setTimeout(() => {
          setTimeRemaining((timeRemaining) => timeRemaining - 1);
          setDelay(timeRemaining);
          if (timeRemaining === 1) {
            console.log('done timering');
          }
        }, 1000);
        return () => clearTimeout(timer);
      }
    },
    // if either of these values changes, clear the timer and rerender; otherwise
    // either the timers on all slides will update at once, or they don't update
    // after the first render
    [timeRemaining, isActive, time, setDelay],
  );

  return (
    <View>
      <Text
      // style={
      //   timeRemaining
      //     ? [styles.timer, styles.current]
      //     : [styles.timer, styles.expired]
      // }
      >
        {formatTime(Math.floor(timeRemaining / 60))}:
        {formatTime(Math.floor(timeRemaining % 60))}
      </Text>
    </View>
  );
};

export default Timer;

function formatTime(unit) {
  const leadingZero = unit < 10 ? '0' : '';

  return leadingZero + unit.toString();
}
