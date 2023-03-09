import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import {card, CustomeButton, heading } from '../components';




export default function StartGameScreen() {

const person = {
  firstname: 'john',
  lastname: 'Doe',
  age: 45,
  job: 'tester'
};

const { firstname, lastname, ... other} = preson;
// console.log(other);

  return (
    <View>
      <heading>Guess My Number</heading>
      <card>
        {/* buttons */}
        <text style={styles.intro}>Enter a number between 1 and 20</text>
        {/* input */}
        <TextInput
        style={styles.input}
        placeholder= "?"
        
        keyboardType='number-pad'
        maxLength={2}
        />
        <view style={styles.buttonContenair}>
          <CustomeButton>Start</CustomeButton>
          <Divider marginLefht={20} />
          <CustomeButton>Reset</CustomeButton>

        </view>
      </card>
    </View>
  );
}

const styles = StyleSheet.create({

buttonContenair: {
  flexDirection: 'row',
},

intro: {
  fontSize: 16,
  fontWeight: 'bold',
  color: 'red',
},

input: {
  width: 90,
  marginBottom: 12,
  fontSize: 20,
  color: '#fff',
  textAlign: 'center',
  borderBottomWidth: 1,

}





})