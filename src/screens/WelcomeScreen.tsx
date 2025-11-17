import { ImageBackground } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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
          <View style={styles.titleContainer}>
            <Text style={styles.text}>F1 mini 🏁</Text>
            <LinearGradient
              colors={[colors.transparent, colors.secondary, colors.transparent]}
              start={{ x: 0, y: 0.9 }}
              end={{ x: 1, y: 0.0 }}
              style={styles.hrGradient}
            />
          </View>
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
    fontSize: 48,
    fontFamily: 'Orbitron-Regular',
  },
  button: {
    padding: 32,
    backgroundColor: colors.primary,
    borderColor: colors.secondary,
    borderWidth: 2,
    borderRadius: 16,
    shadowColor: colors.secondary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 32,
  },
  buttonText: {
    color: colors.white,
    fontSize: 40,
    paddingHorizontal: 16,
    fontFamily: 'Orbitron-ExtraBold',
    textTransform: 'uppercase',
  },
  titleContainer: {
    alignItems: 'center',
    gap: 0,
  },
  hrGradient: {
    width: 400,
    height: 4,
  },
});
