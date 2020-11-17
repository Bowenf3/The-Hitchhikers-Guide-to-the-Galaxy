import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';
import AppletButton from './AppletButton';
import PerilModeButton from './Applets/Peril Sensitive Mode/PerilModeButton';
import Improbable from './Applets/Improbability Drive/Improbable';

function MenuDisplay(props) {
  return (
    <View
      style={{
        // backgroundColor: 'red',
        padding: 10,
        width: '80%',
        height: '80%',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          color: '#94d494',
          textShadowColor: '#66FF66',
          textShadowRadius: 20,
          textAlign: 'center',
          fontSize: 30,
          fontFamily: 'monospace',
          margin: 16,
          // backgroundColor: 'white',
          width: '120%',
        }}
      >
        The Hitchhiker's Guide to the Galaxy
      </Text>
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
          name={'42 Uses for your Towel'}
          setMenuToggle={props.setMenuToggle}
          setOtherToggle={props.setAppletOneToggle}
          sourceFile={require('../assets/towel-304192_1280.png')}
        />
        <AppletButton
          name={"Don't press this button"}
          setMenuToggle={props.setMenuToggle}
          setOtherToggle={props.setAppletTwoToggle}
          sourceFile={require('../assets/button-155149_1280.png')}
        />
        <AppletButton
          name={'Crisis Inducer'}
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
          name={'Deep Thought'}
          setMenuToggle={props.setMenuToggle}
          setOtherToggle={props.setAppletFiveToggle}
          sourceFile={require('../assets/button-153682_1280.png')}
        />
        {/* <AppletButton
          setMenuToggle={props.setMenuToggle}
          setOtherToggle={props.setAppletSixToggle}
          sourceFile={require('../assets/button-153682_1280.png')}
        /> */}
        {/* <AppletButton
          setMenuToggle={props.setMenuToggle}
          setOtherToggle={props.setAppletSevenToggle}
          sourceFile={require('../assets/button-153682_1280.png')}
        /> */}
        <AppletButton
          name={'Total Perspective Vortex'}
          setMenuToggle={props.setMenuToggle}
          setOtherToggle={props.setAppletEightToggle}
          sourceFile={require('../assets/button-153682_1280.png')}
        />
        <Improbable
          setMenuToggle={props.setMenuToggle}
          setOtherToggle={props.setSearchResultToggle}
          setDisplayText={props.setDisplayText}
        />
      </View>
    </View>
  );
}
export default MenuDisplay;
