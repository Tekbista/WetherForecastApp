
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import image from './assets/images/weather.png';


export default function App() {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <SafeAreaView style={styles.container}>
        <HomeScreen />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
