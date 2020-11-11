import 'react-native-gesture-handler';
import React from 'react';
import { Image, Pressable, View } from 'react-native';

function MenuDisplay(props) {
  return (
    <View>
      <Pressable>
        <Image
          style={{ width: 50, height: 60, marginBottom: 15 }}
          source={require('../assets/hand-157251_640.png')}
        />
      </Pressable>
      <Pressable>
        <Image
          style={{ width: 50, height: 60, marginBottom: 15 }}
          source={require('../assets/hand-157251_640.png')}
        />
      </Pressable>
      <Pressable>
        <Image
          style={{ width: 50, height: 60, marginBottom: 15 }}
          source={require('../assets/hand-157251_640.png')}
        />
      </Pressable>
      <Pressable>
        <Image
          style={{ width: 50, height: 60, marginBottom: 15 }}
          source={require('../assets/hand-157251_640.png')}
        />
      </Pressable>
    </View>
  );
}
export default MenuDisplay;
