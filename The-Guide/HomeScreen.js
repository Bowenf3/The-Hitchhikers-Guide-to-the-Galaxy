import 'react-native-gesture-handler';
import { Text, View, ImageBackground, Pressable, Animated } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { useFocusEffect } from '@react-navigation/native';

function HomeScreen({ navigation }) {
  const fadeIn = useRef(new Animated.Value(0)).current;

  useFocusEffect(() => {
    Animated.timing(fadeIn, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: true
    }).start();
  }, [fadeIn]);

  useFocusEffect(
    () => () => {
      return fadeIn.setValue(0);
    },
    [fadeIn]
  );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Pressable onPress={() => navigation.navigate('Details')}>
        <ImageBackground
          source={require('./assets/milky-way.jpg')}
          style={{
            width: '100%',
            height: '100%',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Animated.View
            style={{
              opacity: fadeIn
            }}
          >
            <Text
              style={{
                color: 'purple',
                fontWeight: 'bold',
                fontSize: 100,
                textAlign: 'center'
              }}
            >
              Don't Panic!
            </Text>
          </Animated.View>

          <StatusBar style="auto" />
        </ImageBackground>
      </Pressable>
    </View>
  );
}

export default HomeScreen;
