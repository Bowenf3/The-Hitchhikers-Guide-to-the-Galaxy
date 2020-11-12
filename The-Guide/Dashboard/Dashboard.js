import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
const styles = require('./style');

import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import MenuDisplay from './MenuDisplay';
import MenuButton from './MenuButton';

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
  // const scroll = React.useRef();

  // const goToTop = () => {
  //   // scroll.current.scrollTo({ y: 0, animated: true });
  // };

  return (
    <View style={styles.view}>
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
          // goToTop={goToTop}
          setMenuToggle={setMenuToggle}
          setSearchResultToggle={setSearchResultToggle}
          setAppletOneToggle={setAppletOneToggle}
          setAppletTwoToggle={setAppletTwoToggle}
          setAppletThreeToggle={setAppletThreeToggle}
          setAppletFourToggle={setAppletFourToggle}
          setAppletFiveToggle={setAppletFiveToggle}
          setAppletSixToggle={setAppletSixToggle}
          setAppletSevenToggle={setAppletSevenToggle}
          setAppletEightToggle={setAppletEightToggle}
        />
        {/*TODO: conditional rendering} */}
        {menuToggle && (
          <MenuDisplay
            setMenuToggle={setMenuToggle}
            setAppletOneToggle={setAppletOneToggle}
            setAppletTwoToggle={setAppletTwoToggle}
            setAppletThreeToggle={setAppletThreeToggle}
            setAppletFourToggle={setAppletFourToggle}
            setAppletFiveToggle={setAppletFiveToggle}
            setAppletSixToggle={setAppletSixToggle}
            setAppletSevenToggle={setAppletSevenToggle}
            setAppletEightToggle={setAppletEightToggle}
          />
        )}
        {searchResultToggle && (
          <SearchResult
            // scroll={scroll}
            display={display}
            setMenuToggle={setMenuToggle}
            setOtherToggle={setSearchResultToggle}
          />
        )}
        {appletOneToggle && (
          <View>
            <Text>One</Text>
            <MenuButton
              setMenuToggle={setMenuToggle}
              setOtherToggle={setAppletOneToggle}
            />
          </View>
        )}
        {appletTwoToggle && (
          <View>
            <Text>Two</Text>
            <MenuButton
              setMenuToggle={setMenuToggle}
              setOtherToggle={setAppletTwoToggle}
            />
          </View>
        )}
        {appletThreeToggle && (
          <View>
            <Text>Three</Text>
            <MenuButton
              setMenuToggle={setMenuToggle}
              setOtherToggle={setAppletThreeToggle}
            />
          </View>
        )}
        {appletFourToggle && (
          <View>
            <Text>Four</Text>
            <MenuButton
              setMenuToggle={setMenuToggle}
              setOtherToggle={setAppletFourToggle}
            />
          </View>
        )}
        {appletFiveToggle && (
          <View>
            <Text>Five</Text>
            <MenuButton
              setMenuToggle={setMenuToggle}
              setOtherToggle={setAppletFiveToggle}
            />
          </View>
        )}
        {appletSixToggle && (
          <View>
            <Text>Six</Text>
            <MenuButton
              setMenuToggle={setMenuToggle}
              setOtherToggle={setAppletSixToggle}
            />
          </View>
        )}
        {appletSevenToggle && (
          <View>
            <Text>Seven</Text>
            <MenuButton
              setMenuToggle={setMenuToggle}
              setOtherToggle={setAppletSevenToggle}
            />
          </View>
        )}
        {appletEightToggle && (
          <View>
            <Text>Eight</Text>
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
