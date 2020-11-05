import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, Pressable, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native-gesture-handler';
const apiClientService = require('../ApiClientService');
const styles = require('./style');

function Dashboard({ navigation }) {
  const [value, onChangeText] = React.useState('');
  const [display, onDisplayText] = React.useState('');
  return (
    <View style={styles.view}>
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate('Title')}
      >
        <TextInput
          style={styles.textinput}
          onChangeText={(text) => onChangeText(text)}
          value={value}
          placeholder={'Search the guide...'}
          placeholderTextColor={'grey'}
          onSubmitEditing={() => {
            apiClientService.search({ value }, onDisplayText);
            console.log({ value });
            onChangeText('');
          }}
        />
        <ScrollView style={styles.scrollview}>
          <Text style={styles.text}>{display}</Text>
        </ScrollView>
        <StatusBar style="auto" />
      </Pressable>
    </View>
  );
}

export default Dashboard;
