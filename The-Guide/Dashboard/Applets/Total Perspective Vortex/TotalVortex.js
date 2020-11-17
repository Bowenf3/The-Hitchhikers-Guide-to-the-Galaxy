import React, { useEffect, useRef } from 'react';
import { Video } from 'expo-av';
import { View, Image, Text, Animated } from 'react-native';
import MenuButton from '../../MenuButton';

function TotalVortex(props) {
  let arrow = useRef(new Animated.Value(400)).current;

  useEffect(() => {
    Animated.timing(arrow, {
      toValue: 145,
      duration: 10000,
      delay: 20000,
      useNativeDriver: true,
    }).start();
  }, [arrow]);

  useEffect(
    () => () => {
      return arrow.setValue(400);
    },
    [arrow],
  );

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View style={{ width: '100%', height: 300 }}>
        <Animated.View
          elevation={2}
          style={{
            position: 'absolute',
            top: 135,
            transform: [{ translateX: arrow }],
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Image
            style={{ height: 30, width: 30 }}
            source={require('../../../assets/arrow.png')}
          />
          <Text
            style={{
              color: '#94d494',
              textShadowColor: '#66FF66',
              textShadowRadius: 20,
              fontSize: 15,
              textAlign: 'center',
              fontFamily: 'monospace',
              marginLeft: 5,
            }}
          >
            You are here
          </Text>
        </Animated.View>
        <Video
          source={require('../../../assets/GarchingOPIS-zoom.m4v')}
          rate={3.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          // isLooping
          style={{ width: 300, height: 300 }}
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
export default TotalVortex;
