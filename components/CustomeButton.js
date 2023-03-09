import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { Children } from 'react'

export default function CustomeButton({onPress, children}) {
    // props.onPress = onPress
    // children = contenue du composant (son || ses enfants)
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text>{Children}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({

button: {
    width: 100,
    backgroundColor: "#576287",
    paddingHorizontal: 16,
    paddingVertical: 14,
},

buttontext: {
    textAlign: 'center',
},



})



