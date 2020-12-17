import 'react-native-gesture-handler';
import React from 'react';
import { Pressable, View, Text } from 'react-native';

function AppletButton(props) {
  return (
    <View
      style={{
        marginBottom: 20,
      }}
    >
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'green' : 'transparent',
          },
        ]}
        onPress={() => {
          props.setMenuToggle(false);
          props.setOtherToggle(true);
        }}
      >
        <View
          style={{
            borderColor: 'green',
            borderStyle: 'dashed',
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
            {props.name}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
export default AppletButton;
