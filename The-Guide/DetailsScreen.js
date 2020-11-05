import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, Pressable, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native-gesture-handler';
const apiClientService = require('./ApiClientService');

function DetailsScreen({ navigation }) {
  const [value, onChangeText] = React.useState('');
  const [display, onDisplayText] = React.useState('');
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Pressable
        style={{
          height: '100%',
          width: '100%',
          flex: 1,
          flexDirection: 'column',

          alignItems: 'center'
        }}
        onPress={() => navigation.navigate('Home')}
      >
        <TextInput
          style={{
            height: 40,
            width: '60%',
            borderColor: 'gray',
            borderWidth: 1,
            color: 'white',
            textAlign: 'center',
            marginTop: 40
          }}
          onChangeText={(text) => onChangeText(text)}
          value={value}
          placeholder={'Search the guide...'}
          placeholderTextColor={'grey'}
          onSubmitEditing={() => {
            apiClientService.search({ value }, onDisplayText);
            console.log({ value });
            onChangeText('');
          }}
        ></TextInput>
        <ScrollView style={{ margin: 20 }}>
          <Text style={{ color: 'white' }}>{display}</Text>
        </ScrollView>

        <StatusBar style="auto" />
      </Pressable>
    </View>
  );
}

export default DetailsScreen;
