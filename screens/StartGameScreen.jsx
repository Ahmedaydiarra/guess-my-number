import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useContext } from 'react';
import {card, CustomeButton, heading ,Divider} from '../components';
import { rootContext } from '../context/AppContext';
import GameOverScreen from './GameOverScreen';
import GameScreen from './GameScreen';




export default function StartGameScreen() {

const {secretNumber, numberEntered, onChangehandler} = useContext(rootContext);
// console.log(other);
function startGameHandler() {
  if(numberEntered > 20 || numberEntered === 0) {
    return Alert.alert("Erreur",
     'please provide a number between 1 and 20',
     [
      {


        text: 'oups...',
        // onPress: () => console.log('hello'),
        style: 'destructive',

      },
     ]
     );
  }


  if (secretNumber ===  Number(numberEntered)) {
    setScreen()
  } else {
    return <GameScreen />;
  }
}
  return (
    <View>
      <heading>Guess My Number</heading>
      <card>
        {/* buttons */}
        <text style={styles.intro}>Enter a number between 1 and 20</text>
        {/* input */}
        <TextInput
        style={styles.input}
        defaultValue= "?"
        autoCapitalize='words'
        onChangeText={onChangehandler}
        value={numberEntered}
        // keyboardType='number-pad'
        maxLength={2}
        />
        <view style={styles.buttonContenair}>
          <CustomeButton onPress={startGameHandler}>Start</CustomeButton>
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
  paddingVertical: 8,
  marginBottom: 12,
  fontSize: 20,
  color: '#fff',
  textAlign: 'center',
  borderBottomWidth: 1,
  borderBottomColor: '#fff',

}





})