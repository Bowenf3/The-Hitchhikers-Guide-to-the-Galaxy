import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
const styles = require('./style');

import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import MenuDisplay from './MenuDisplay';

function Dashboard({ navigation }) {
  const [text, setText] = React.useState('');
  const [display, setDisplayText] = React.useState('');
  const [menuToggle, setMenuToggle] = React.useState(true);
  const [searchResultToggle, setSearchResultToggle] = React.useState(false);
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
        />
        {/*TODO: conditional rendering} */}
        {menuToggle && <MenuDisplay />}
        {searchResultToggle && (
          <SearchResult
            // scroll={scroll}
            display={display}
            setMenuToggle={setMenuToggle}
            setSearchResultToggle={setSearchResultToggle}
          />
        )}
        <StatusBar translucent={true} backgroundColor={'transparent'} />
      </LinearGradient>
    </View>
  );
}

export default Dashboard;
