import React from 'react';
import { Video } from 'expo-av';
import { View } from 'react-native';
import MenuButton from '../../MenuButton';

function TotalVortex(props) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View style={{ width: '100%', height: 300 }}>
        <Video
          source={require('../../../assets/GarchingOPIS-zoom.m4v')}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={{ width: 300, height: 300 }}
          // ref={(ref) => {
          //   this.player = ref;
          //   // ref.loadAsync(
          //   //   require('../../../assets/GarchingOPIS-zoom.m4v'),
          //   //   (initialStatus = {}),
          //   //   (downloadFirst = true),
          //   // );
          //   ref.presentFullscreenPlayer();
          //   // .then(() => ref.dismissFullscreenPlayer());
          //   // ref.setIsLoopingAsync(true);
          // }}
        />
      </View>
      <View style={{ position: 'absolute', bottom: 5 }}>
        <MenuButton
          setMenuToggle={props.setMenuToggle}
          setOtherToggle={props.setOtherToggle}
        />
      </View>
    </View>
  );
}
export default TotalVortex;
