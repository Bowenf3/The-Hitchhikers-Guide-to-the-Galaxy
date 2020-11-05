import 'react-native-gesture-handler';
import { Text, View, ImageBackground, Pressable, Animated } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { useFocusEffect } from '@react-navigation/native';
const styles = require('./style');

function TitleScreen({ navigation }) {
  const fadeIn = useRef(new Animated.Value(0)).current;

  useFocusEffect(() => {
    Animated.timing(fadeIn, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: true,
    }).start();
  }, [fadeIn]);

  useFocusEffect(
    () => () => {
      return fadeIn.setValue(0);
    },
    [fadeIn],
  );

  return (
    <View style={styles.view}>
      <Pressable onPress={() => navigation.navigate('Dashboard')}>
        <ImageBackground
          source={require('../assets/milky-way.jpg')}
          style={styles.background}
        >
          <Animated.View
            style={{
              opacity: fadeIn,
            }}
          >
            <Text style={styles.text}>Don't Panic!</Text>
          </Animated.View>

          <StatusBar style="auto" />
        </ImageBackground>
      </Pressable>
    </View>
  );
}

export default TitleScreen;
