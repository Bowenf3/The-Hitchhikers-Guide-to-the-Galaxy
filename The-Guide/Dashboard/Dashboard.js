import 'react-native-gesture-handler';
import React, { useRef } from 'react';
import { Animated, View, Text, Easing } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { useFocusEffect } from '@react-navigation/native';
const styles = require('./style');
const { towel } = require('../assets/towel-uses.json');

import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import MenuDisplay from './MenuDisplay';
import MenuButton from './MenuButton';
import Calculator from './Applets/Calculator/Calculator';
import CrisisInducer from './Applets/CrisisInducer/CrisisInducer';
import PerilSense from './Applets/Peril Sensitive Mode/PerilSense';
import TotalVortex from './Applets/Total Perspective Vortex/TotalVortex';
import BabelFish from './Applets/Babel Fish/BabelFish';

function Dashboard({ navigation }) {
  const [text, setText] = React.useState('');
  const [display, setDisplayText] = React.useState('');
  const [menuToggle, setMenuToggle] = React.useState(true);
  const [searchResultToggle, setSearchResultToggle] = React.useState(false);
  const [appletOneToggle, setAppletOneToggle] = React.useState(false);
  const [appletTwoToggle, setAppletTwoToggle] = React.useState(false);
  const [appletThreeToggle, setAppletThreeToggle] = React.useState(false);
  const [appletFourToggle, setAppletFourToggle] = React.useState(false);
  const [appletFiveToggle, setAppletFiveToggle] = React.useState(false);
  const [appletSixToggle, setAppletSixToggle] = React.useState(false);
  const [appletSevenToggle, setAppletSevenToggle] = React.useState(false);
  const [appletEightToggle, setAppletEightToggle] = React.useState(false);
  const vector = useRef(new Animated.Value(-400)).current;
  const vectorTwo = useRef(new Animated.Value(-400)).current;
  const vectorThree = useRef(new Animated.Value(-400)).current;
  const vectorFour = useRef(new Animated.Value(-400)).current;
  const vectorFive = useRef(new Animated.Value(-400)).current;

  useFocusEffect(() => {
    Animated.loop(
      Animated.timing(vector, {
        toValue: 350,
        duration: 10000,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
    ).start(),
      Animated.loop(
        Animated.timing(vectorTwo, {
          toValue: 350,
          duration: 10000,
          useNativeDriver: true,
          delay: Math.floor(Math.random() * 2000) + 1000,
          easing: Easing.linear,
        }),
      ).start(),
      Animated.loop(
        Animated.timing(vectorThree, {
          toValue: 350,
          duration: 10000,
          useNativeDriver: true,
          delay: Math.floor(Math.random() * 2000) + 3000,
          easing: Easing.linear,
        }),
      ).start(),
      Animated.loop(
        Animated.timing(vectorFour, {
          toValue: 350,
          duration: 10000,
          useNativeDriver: true,
          delay: Math.floor(Math.random() * 2000) + 5000,
          easing: Easing.linear,
        }),
      ).start(),
      Animated.loop(
        Animated.timing(vectorFive, {
          toValue: 350,
          duration: 10000,
          useNativeDriver: true,
          delay: Math.floor(Math.random() * 2000) + 7000,
          easing: Easing.linear,
        }),
      ).start();
  }, []);

  useFocusEffect(
    () => () => {
      return vector.setValue(-400);
    },
    [vector],
  );

  useFocusEffect(
    () => () => {
      return vectorTwo.setValue(-400);
    },
    [vectorTwo],
  );
  useFocusEffect(
    () => () => {
      return vectorThree.setValue(-400);
    },
    [vectorThree],
  );
  useFocusEffect(
    () => () => {
      return vectorFour.setValue(-400);
    },
    [vectorFour],
  );
  useFocusEffect(
    () => () => {
      return vectorFive.setValue(-400);
    },
    [vectorFive],
  );

  return (
    <View style={styles.view}>
      {appletFourToggle && <PerilSense />}
      <LinearGradient
        style={styles.background}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={[
          'black',
          '#0c1c0c',
          '#102610',
          '#132e13',
          '#1b401b',
          '#132e13',
          '#102610',
          '#0c1c0c',
          'black',
        ]}
      >
        <Animated.View
          pointerEvents={'box-none'}
          style={{
            position: 'absolute',
            elevation: 2,
            height: 20,
            width: '100%',
            opacity: 0.05,
            backgroundColor: 'black',
            borderWidth: 3,
            borderColor: 'grey',
            transform: [{ translateY: vector }],
          }}
        />
        <Animated.View
          pointerEvents={'box-none'}
          style={{
            position: 'absolute',
            elevation: 2,
            height: 10,
            width: '100%',
            opacity: 0.05,
            backgroundColor: 'black',
            borderWidth: 3,
            borderColor: 'grey',
            transform: [{ translateY: vectorTwo }],
          }}
        />
        <Animated.View
          pointerEvents={'box-none'}
          style={{
            position: 'absolute',
            elevation: 2,
            height: 8,
            width: '100%',
            opacity: 0.05,
            backgroundColor: 'black',
            borderWidth: 3,
            borderColor: 'grey',
            transform: [{ translateY: vectorThree }],
          }}
        />
        <Animated.View
          pointerEvents={'box-none'}
          style={{
            position: 'absolute',
            elevation: 2,
            height: 12,
            width: '100%',
            opacity: 0.05,
            backgroundColor: 'black',
            borderWidth: 3,
            borderColor: 'grey',
            transform: [{ translateY: vectorFour }],
          }}
        />
        <Animated.View
          pointerEvents={'box-none'}
          style={{
            position: 'absolute',
            elevation: 2,
            height: 10,
            width: '100%',
            opacity: 0.05,
            backgroundColor: 'black',
            borderWidth: 3,
            borderColor: 'grey',
            transform: [{ translateY: vectorFive }],
          }}
        />
        <SearchBar
          setText={setText}
          value={text}
          setDisplayText={setDisplayText}
          setMenuToggle={setMenuToggle}
          setSearchResultToggle={setSearchResultToggle}
          setAppletOneToggle={setAppletOneToggle}
          setAppletTwoToggle={setAppletTwoToggle}
          setAppletThreeToggle={setAppletThreeToggle}
          setAppletFiveToggle={setAppletFiveToggle}
          setAppletSixToggle={setAppletSixToggle}
          setAppletSevenToggle={setAppletSevenToggle}
          setAppletEightToggle={setAppletEightToggle}
        />
        {menuToggle && (
          <MenuDisplay
            setMenuToggle={setMenuToggle}
            setSearchResultToggle={setSearchResultToggle}
            setDisplayText={setDisplayText}
            setAppletOneToggle={setAppletOneToggle}
            setAppletTwoToggle={setAppletTwoToggle}
            setAppletThreeToggle={setAppletThreeToggle}
            setAppletFourToggle={setAppletFourToggle}
            appletFourToggle={appletFourToggle}
            setAppletFiveToggle={setAppletFiveToggle}
            setAppletSixToggle={setAppletSixToggle}
            setAppletSevenToggle={setAppletSevenToggle}
            setAppletEightToggle={setAppletEightToggle}
          />
        )}
        {searchResultToggle && (
          <SearchResult
            display={display}
            setDisplayText={setDisplayText}
            setMenuToggle={setMenuToggle}
            setOtherToggle={setSearchResultToggle}
          />
        )}
        {appletOneToggle && (
          <SearchResult
            display={towel}
            setDisplayText={setDisplayText}
            setMenuToggle={setMenuToggle}
            setOtherToggle={setAppletOneToggle}
          />
        )}
        {appletTwoToggle && (
          <SearchResult
            display={'Please do not press this button again'}
            setDisplayText={setDisplayText}
            setMenuToggle={setMenuToggle}
            setOtherToggle={setAppletTwoToggle}
          />
        )}
        {appletThreeToggle && (
          <CrisisInducer
            setMenuToggle={setMenuToggle}
            setOtherToggle={setAppletThreeToggle}
          />
        )}
        {appletFiveToggle && (
          <Calculator
            setMenuToggle={setMenuToggle}
            setOtherToggle={setAppletFiveToggle}
          />
        )}
        {appletSixToggle && (
          <View>
            <Text>Marvin's Demotivational Quotes</Text>
            <MenuButton
              setMenuToggle={setMenuToggle}
              setOtherToggle={setAppletSixToggle}
            />
          </View>
        )}
        {appletSevenToggle && (
          <BabelFish
            setMenuToggle={setMenuToggle}
            setOtherToggle={setAppletSevenToggle}
          />
        )}
        {appletEightToggle && (
          <TotalVortex
            setMenuToggle={setMenuToggle}
            setOtherToggle={setAppletEightToggle}
          />
        )}
        <StatusBar translucent={true} backgroundColor={'transparent'} />
      </LinearGradient>
    </View>
  );
}

export default Dashboard;
