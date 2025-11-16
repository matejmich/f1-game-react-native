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
          <Text style={styles.text}>Welcome page 🏁</Text>

          <TouchableOpacity style={styles.button} onPress={handleNavigation}>
            <Text style={styles.text}>Play</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  button: {
    padding: 16,
    backgroundColor: colors.secondary,
    borderRadius: 8,
  },
});
