import 'react-native-gesture-handler';
import React from 'react';
import { Image, Pressable, View } from 'react-native';

function PerilModeButton(props) {
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
          if (props.appletFourToggle === true) {
            props.setOtherToggle(false);
          } else {
            props.setOtherToggle(true);
          }
        }}
      >
        <Image
          style={{ width: 90, height: 90, margin: 10 }}
          source={props.sourceFile}
        />
      </Pressable>
    </View>
  );
}
export default PerilModeButton;
