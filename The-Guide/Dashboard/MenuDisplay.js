import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';
import { BlurView } from 'expo-blur';
import AppletButton from './AppletButton';
import PerilModeButton from './Applets/Peril Sensitive Mode/PerilModeButton';

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
          sourceFile={require('../assets/towel-304192_1280.png')}
        />
        <AppletButton
          setMenuToggle={props.setMenuToggle}
          setOtherToggle={props.setAppletTwoToggle}
          sourceFile={require('../assets/button-155149_1280.png')}
        />
        <AppletButton
          setMenuToggle={props.setMenuToggle}
          setOtherToggle={props.setAppletThreeToggle}
          sourceFile={require('../assets/button-153682_1280.png')}
        />
        <PerilModeButton
          setOtherToggle={props.setAppletFourToggle}
          appletFourToggle={props.appletFourToggle}
          sourceFile={require('../assets/button-153682_1280.png')}
        />
        <AppletButton
          setMenuToggle={props.setMenuToggle}
          setOtherToggle={props.setAppletFiveToggle}
          sourceFile={require('../assets/button-153682_1280.png')}
        />
        <AppletButton
          setMenuToggle={props.setMenuToggle}
          setOtherToggle={props.setAppletSixToggle}
          sourceFile={require('../assets/button-153682_1280.png')}
        />
        <AppletButton
          setMenuToggle={props.setMenuToggle}
          setOtherToggle={props.setAppletSevenToggle}
          sourceFile={require('../assets/button-153682_1280.png')}
        />
        <AppletButton
          setMenuToggle={props.setMenuToggle}
          setOtherToggle={props.setAppletEightToggle}
          sourceFile={require('../assets/button-153682_1280.png')}
        />
      </View>
    </BlurView>
  );
}
export default MenuDisplay;
