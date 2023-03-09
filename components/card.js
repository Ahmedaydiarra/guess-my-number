import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function card(children) {
  return 
    <View style={styles.contenair}>
      {children}
    </View>;
  
}

const styles = StyleSheet.create({

contenair: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
    borderRadius: 6,
    backgroundColor: "#222",
},



});