import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function card({children}) {
  return 
    <View style={styles.contenair}>
      {children}
    </View>;
  
}

const styles = StyleSheet.create({

contenair: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 36,
    borderRadius: 6,
    backgroundColor: "#222",
    elevation: 4,
    shadowColor: "yellow"
},



});