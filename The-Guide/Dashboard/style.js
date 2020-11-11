import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    height: '100%',
    width: '100%',
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
    position: 'absolute',
    height: 40,
    width: '60%',
    borderColor: '#204520',
    borderWidth: 1,
    color: '#94d494',
    textShadowColor: '#66FF66',
    textShadowRadius: 20,
    textAlign: 'center',
    top: 40,
  },
  searchresult: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
  },
  scrollview: {
    margin: 10,
  },
  text: {
    textAlign: 'auto',
    color: '#94d494',
    textShadowColor: '#66FF66',
    textShadowRadius: 20,
  },
});
