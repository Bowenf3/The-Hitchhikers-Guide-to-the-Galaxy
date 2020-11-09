import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#FFD700',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressable: {
    height: '100%',
    width: '100%',
    flex: 1,
    flexDirection: 'column',

    alignItems: 'center',
  },
  textinput: {
    height: 40,
    width: '60%',
    borderColor: 'gray',
    borderWidth: 1,
    color: 'white',
    textAlign: 'center',
    marginTop: 40,
  },
  scrollview: {
    margin: 20,
  },
  text: {
    textAlign: 'left',
    color: 'white',
  },
});
