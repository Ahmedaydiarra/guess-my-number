import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext } from 'react'
import { CustomeButton, heading } from '../components'
import Card from '../components/Divider'
import { rootContext } from '../context/AppContext'

export default function GameScreen() {
    const { onchangeHandler, numberEntered } = 
    useContext(rootContext);

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
        <CustomeButton></CustomeButton> 
    </view>
    {/* buttons */}
    <view style={styles.contenair}>

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
},

cubeText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold'
},

inputContenair: {
    flexDirection: 'row',
    marginTop: 24
},

input: {
    width: 90,

}



})