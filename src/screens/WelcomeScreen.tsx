import { ImageBackground } from 'expo-image';
import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import backgroudImage from '../../assets/images/welcome_photo.jpg';

import colors from '../constants/colors';

export default function WelcomeScreen() {
  const handleNavigation = () => {
    router.push('/games');
  };

  return (
    <>
      <ImageBackground source={backgroudImage} contentFit="cover" style={styles.background}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.text}>Welcome to F1 mini 🏁</Text>
          <TouchableOpacity style={styles.button} onPress={handleNavigation}>
            <Text style={styles.buttonText}>Play</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 64,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 64,
  },
  text: {
    color: colors.white,
    fontSize: 24,
    fontFamily: 'Orbitron-Regular',
  },
  button: {
    padding: 32,
    backgroundColor: colors.secondary,
    borderRadius: 8,
  },
  buttonText: {
    color: colors.white,
    fontSize: 40,
    paddingHorizontal: 16,
    fontFamily: 'Orbitron-ExtraBold',
    textTransform: 'uppercase',
  },
});
