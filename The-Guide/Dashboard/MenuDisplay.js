import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';
import { BlurView } from 'expo-blur';
import AppletButton from './AppletButton';

function MenuDisplay(props) {
  return (
    <BlurView
      intensity={40}
      style={{
        // backgroundColor: 'white',
        padding: 10,
        width: '70%',
        height: '65%',
      }}
    >
      <View
        style={{
          // backgroundColor: 'red',
          flex: 1,
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        <AppletButton
          setMenuToggle={props.setMenuToggle}
          setOtherToggle={props.setAppletOneToggle}
        />
        <AppletButton
          setMenuToggle={props.setMenuToggle}
          setOtherToggle={props.setAppletTwoToggle}
        />
        <AppletButton
          setMenuToggle={props.setMenuToggle}
          setOtherToggle={props.setAppletThreeToggle}
        />
        <AppletButton
          setMenuToggle={props.setMenuToggle}
          setOtherToggle={props.setAppletFourToggle}
        />
        <AppletButton
          setMenuToggle={props.setMenuToggle}
          setOtherToggle={props.setAppletFiveToggle}
        />
        <AppletButton
          setMenuToggle={props.setMenuToggle}
          setOtherToggle={props.setAppletSixToggle}
        />
        <AppletButton
          setMenuToggle={props.setMenuToggle}
          setOtherToggle={props.setAppletSevenToggle}
        />
        <AppletButton
          setMenuToggle={props.setMenuToggle}
          setOtherToggle={props.setAppletEightToggle}
        />
      </View>
    </BlurView>
  );
}
export default MenuDisplay;
