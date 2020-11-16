import 'react-native-gesture-handler';
import React from 'react';
import { Image, Pressable, View, Text } from 'react-native';

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
            // TODO: On press make button glow
            backgroundColor: pressed ? 'green' : 'transparent',
          },
        ]}
        onPress={() => {
          props.setMenuToggle(false);
          props.setOtherToggle(true);
        }}
      >
        {/* <Image
          style={{ width: 90, height: 90, margin: 10 }}
          source={props.sourceFile}
        /> */}
        <View
          style={{
            borderColor: 'green',
            // backgroundColor: 'black',
            borderStyle: 'dashed',
            borderWidth: 1,
            width: 110,
            height: 110,
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
