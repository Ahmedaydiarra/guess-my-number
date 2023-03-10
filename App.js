import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import {ImageBackground, StyleSheet, Text, View } from 'react-native';
import { StartGameScreen } from './screens';
import RootProvider,{rootContext} from './context/AppContext.jsx';


const background = require('./assets/background.jpeg');

export default function App() {
  return (
    
    <Provider>
      <linearGradient  style={styles.container} color={['black', 'transparent']}>
        <ImageBackground style={styles.ImageBackground}
        
        source={background}>
          
    
      <StartGameScreen/>
      <StatusBar style="auto" />
      </ImageBackground>
     </linearGradient>
     </Provider>
  );
}

const styles = StyleSheet.create({
  // root: {flex: 1},
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 120
    
  },

  

  ImageBackground: {
    opacity: 0.2,
  },
});
