import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { CustomeButton, heading } from '../components'



export default function StartGameScreen() {
  return (
    <View>
      <heading>Guess My Number</heading>
      <CustomeButton>
        Start
      </CustomeButton>
    </View>
  )
}

const styles = StyleSheet.create({})