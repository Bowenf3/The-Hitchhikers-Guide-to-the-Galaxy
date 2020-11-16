import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { Overlay } from 'react-native-elements';
import { Accelerometer } from 'expo-sensors';

export default function PerilSense(props) {
  const [data, setData] = useState({});
  const [oldData, setOldData] = useState({});
  const [dark, setDark] = useState(0);

  function round(n) {
    if (!n) {
      return 0;
    }
    return Math.floor(n * 100) / 100;
  }

  useEffect(() => {
    _subscribe();
  }, []);

  useEffect(() => {
    const { x, y, z } = oldData;
    const oldTotal = Math.abs(x) + Math.abs(y) + Math.abs(z);
    const newTotal = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
    const change = Math.abs(oldTotal - newTotal);

    setDark((change / 5) * 2.5);
    setOldData(data);
  }, [data]);

  useEffect(() => {
    return () => {
      _unsubscribe();
    };
  }, []);

  const _subscribe = () => {
    Accelerometer.setUpdateInterval(300);
    this._subscription = Accelerometer.addListener((accelerometerData) => {
      setData(accelerometerData);
    });
  };

  const _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };

  return (
    <View
      pointerEvents={'box-none'}
      style={{
        position: 'absolute',
        elevation: 3,
        height: '100%',
        width: '100%',
        opacity: round(dark),
        backgroundColor: 'black',
      }}
    ></View>
  );
}
