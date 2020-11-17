import React from 'react';
import { Pressable, View, Text } from 'react-native';
const apiClientService = require('../../../ApiClientService');

function Improbable(props) {
  return (
    <View
      style={{
        marginBottom: 20,
      }}
    >
      <Pressable
        style={({ pressed }) => [
          {
            // TODO: On press make button glow
            backgroundColor: pressed ? 'green' : 'transparent',
          },
        ]}
        onPress={() => {
          props.setDisplayText('Loading...');
          apiClientService.random(props.setDisplayText);
          props.setMenuToggle(false);
          props.setOtherToggle(true);
        }}
      >
        <View
          style={{
            borderColor: 'green',
            // backgroundColor: 'black',
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
            Improb-ability Drive
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
export default Improbable;
