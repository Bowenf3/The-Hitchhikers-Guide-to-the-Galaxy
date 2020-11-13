import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
const styles = require('./style');
const { towel } = require('../assets/towel-uses.json');

import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import MenuDisplay from './MenuDisplay';
import MenuButton from './MenuButton';
import Calculator from './Applets/Calculator/Calculator';
import CrisisInducer from './Applets/CrisisInducer/CrisisInducer';
import PerilSense from './Applets/Peril Sensitive Mode/PerilSense';

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
            style={{ zIndex: 1 }}
            display={display}
            setMenuToggle={setMenuToggle}
            setOtherToggle={setSearchResultToggle}
          />
        )}
        {appletOneToggle && (
          <SearchResult
            display={towel}
            setMenuToggle={setMenuToggle}
            setOtherToggle={setAppletOneToggle}
          />
        )}
        {appletTwoToggle && (
          <SearchResult
            display={'Please do not press this button again'}
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
        {/* {appletFourToggle && (
          <PerilSense
            setMenuToggle={setMenuToggle}
            setOtherToggle={setAppletFourToggle}
          />
        )} */}
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
          <View>
            <Text>Babel Fish</Text>
            <MenuButton
              setMenuToggle={setMenuToggle}
              setOtherToggle={setAppletSevenToggle}
            />
          </View>
        )}
        {appletEightToggle && (
          <View>
            <Text>Total Perspective Vortex</Text>
            <MenuButton
              setMenuToggle={setMenuToggle}
              setOtherToggle={setAppletEightToggle}
            />
          </View>
        )}
        <StatusBar translucent={true} backgroundColor={'transparent'} />
      </LinearGradient>
    </View>
  );
}

export default Dashboard;
