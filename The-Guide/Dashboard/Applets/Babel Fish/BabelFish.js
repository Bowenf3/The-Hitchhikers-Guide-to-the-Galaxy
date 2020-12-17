import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import MenuButton from '../../MenuButton';
import { ScrollView } from 'react-native-gesture-handler';
const { languages } = require('./languages.json');
const apiClientService = require('../../../ApiClientService');

function BabelFish(props) {
  const [toTranslate, setToTranslate] = React.useState('');
  const [lang, setLang] = React.useState('af');
  const [returnTranslation, setReturnTranslation] = React.useState('');

  useEffect(
    () => () => {
      return setReturnTranslation('');
    },
    [],
  );

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          width: '80%',
          height: '60%',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            textAlign: 'auto',
            fontFamily: 'monospace',
            color: '#94d494',
            textShadowColor: '#66FF66',
            textShadowRadius: 20,
          }}
        >
          Choose your language
        </Text>
        <View>
          <Picker
            selectedValue={lang}
            style={{
              height: 50,
              width: 100,
              textAlign: 'auto',
              fontFamily: 'monospace',
              color: '#94d494',
              textShadowColor: '#66FF66',
              textShadowRadius: 20,
              marginBottom: 20,
            }}
            onValueChange={(itemValue, itemIndex) => setLang(itemValue)}
          >
            {Object.keys(languages).map((language) => {
              return (
                <Picker.Item
                  key={language}
                  label={languages[language]}
                  value={language}
                />
              );
            })}
          </Picker>
        </View>
        <TextInput
          style={{
            height: 100,
            width: 300,
            borderColor: '#204520',
            borderWidth: 1,
            color: '#94d494',
            textShadowColor: '#66FF66',
            textShadowRadius: 20,
            textAlign: 'center',
            fontFamily: 'monospace',
          }}
          onChangeText={(text) => setToTranslate(text)}
          onSubmitEditing={() => {
            apiClientService.translate(toTranslate, lang, setReturnTranslation);
          }}
          onFocus={() => {
            setToTranslate('');
          }}
          maxLength={100}
          numberOfLines={5}
          multiline={true}
          value={toTranslate}
          placeholder={'Enter text to translate'}
          placeholderTextColor={'#1b401b'}
          selectionColor={'#94d494'}
        />
        <ScrollView
          fadingEdgeLength={100}
          style={{ backgroundColor: ' red', margin: 10 }}
        >
          <Text
            style={{
              textAlign: 'auto',
              fontFamily: 'monospace',
              color: '#94d494',
              textShadowColor: '#66FF66',
              textShadowRadius: 20,
            }}
          >
            {returnTranslation}
          </Text>
        </ScrollView>
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
export default BabelFish;
