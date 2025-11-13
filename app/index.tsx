import colors from '@/src/constants/colors';
import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const handleNavigation = () => {
    router.push('/games');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Welcome page 🏁</Text>
      <TouchableOpacity style={styles.button} onPress={handleNavigation}>
        <Text style={styles.text}>Play</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    gap: 64,
    backgroundColor: colors.primary,
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
