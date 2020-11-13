import React from 'react';
import { Video } from 'expo-av';
import { View } from 'react-native';

function TotalVortex(props) {
  return (
    <View style={{ width: 300, height: 300 }}>
      <Video
        source={require('../../../assets/GarchingOPIS-zoom.m4v')}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={{ width: 300, height: 300 }}
      />
    </View>
  );
}
export default TotalVortex;
