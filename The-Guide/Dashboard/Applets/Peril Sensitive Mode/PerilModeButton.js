import 'react-native-gesture-handler';
import React from 'react';
import { Pressable, View, Text } from 'react-native';

function PerilModeButton(props) {
  const toggled = props.appletFourToggle ? 'red' : 'green';

  return (
    <View
      style={{
        marginBottom: 20,
      }}
    >
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'red' : 'transparent',
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
        <View
          style={{
            borderColor: toggled,
            borderWidth: 1,
            width: 110,
            height: 90,
            margin: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              width: '90%',
              color: '#94d494',
              textShadowColor: '#66FF66',
              textShadowRadius: 20,
              textAlign: 'center',
              fontFamily: 'monospace',
            }}
          >
            Peril Sensitive Mode
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
export default PerilModeButton;
