import 'react-native-gesture-handler';
import React from 'react';
import { Image, Pressable, View } from 'react-native';

function AppletButton(props) {
  return (
    <View>
      <Pressable
        style={({ pressed }) => [
          {
            // TODO: On press make button glow
            backgroundColor: pressed ? 'green' : 'transparent',
          },
        ]}
        onPress={() => {
          props.setMenuToggle(false);
          props.setOtherToggle(true);
        }}
      >
        <Image
          style={{ width: 80, height: 90, margin: 10 }}
          source={require('../assets/hand-157251_640.png')}
        />
      </Pressable>
    </View>
  );
}
export default AppletButton;
