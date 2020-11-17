import 'react-native-gesture-handler';
import {
  View,
  ImageBackground,
  Pressable,
  Animated,
  Image,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Audio } from 'expo-av';
const styles = require('./style');

const music = require('../assets/MovieTitleTheme.mp3');
const soundObject = new Audio.Sound();

function TitleScreen({ navigation }) {
  const fadeIn = useRef(new Animated.Value(0)).current;
  const greenIn = useRef(new Animated.Value(0)).current;
  const snapShut = useRef(new Animated.Value(0)).current;
  const snapShutTwo = useRef(new Animated.Value(800)).current;

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

  useFocusEffect(() => {
    playSound();
    Animated.timing(fadeIn, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: true,
    }).start();
    console.log('called', fadeIn);
  }, [fadeIn]);

  useFocusEffect(
    () => () => {
      return (
        stopSound(),
        fadeIn.setValue(0),
        greenIn.setValue(0),
        snapShut.setValue(0),
        snapShutTwo.setValue(800)
      );
    },
    [fadeIn],
  );

  const handlePress = () => {
    setTimeout(() => {
      navigation.navigate('Dashboard');
    }, 800);
    Animated.timing(fadeIn, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    Animated.timing(greenIn, {
      toValue: 0.7,
      duration: 800,
      useNativeDriver: true,
    }).start();
    Animated.timing(snapShut, {
      toValue: 500,
      duration: 300,
      delay: 500,
      useNativeDriver: true,
    }).start();
    Animated.timing(snapShutTwo, {
      toValue: 300,
      duration: 300,
      delay: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.view}>
      <Pressable
        onPress={() => handlePress()}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        <Animated.View
          pointerEvents={'box-none'}
          style={{
            position: 'absolute',
            elevation: 3,
            height: '100%',
            width: '100%',
            opacity: greenIn,
            backgroundColor: '#102610',
          }}
        ></Animated.View>
        <Animated.View
          style={{
            position: 'absolute',
            elevation: 3,
            transform: [{ translateY: snapShutTwo }],
            bottom: 0,
            height: '100%',
            width: '100%',
            backgroundColor: '#0c1c0c',
          }}
        />
        <ImageBackground
          source={require('../assets/milky-way.jpg')}
          style={{
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Animated.View
            style={{
              opacity: fadeIn,
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%',
            }}
          >
            <Image
              style={{ height: '30%', width: '100%' }}
              source={require('../assets/Title.png')}
            />
          </Animated.View>
          <StatusBar style="auto" />
        </ImageBackground>
        <Animated.View
          style={{
            position: 'absolute',
            elevation: 3,
            transform: [{ translateY: snapShut }],
            bottom: 800,
            height: '100%',
            width: '100%',
            backgroundColor: '#0c1c0c',
          }}
        />
      </Pressable>
    </View>
  );
}

export default TitleScreen;
