import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { CustomeButton, heading } from '../components'
import Card from '../components/Divider'
import { rootContext } from '../context/AppContext'

export default function GameScreen() {


  return (
    <View>
      <heading>oppenent's Guess</heading>


      <Card>
        <view style={styles.cubeContenair}>
            <text style={styles.cubeText}>?</text>
        </view>

    {/* Input */}
    <view style={styles.inputContenair}>
        <CustomeButton>*</CustomeButton>

        <TextInput
        style={styles.input}
        defaultValue="?"
        autoCapitalize='words'
        onChangeText={onchangeHandler}
        value={numberEntered}
        maxLength={2}
        />

    </view>

    </Card>



    </View>


    

  );
}

const styles = StyleSheet.create({

cubeContenar: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
}




})