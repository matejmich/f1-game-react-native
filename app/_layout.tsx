import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  const [loaded] = useFonts({
    'Orbitron-Regular': require('../assets/fonts/Orbitron-Regular.ttf'),
    'Orbitron-Medium': require('../assets/fonts/Orbitron-Medium.ttf'),
    'Orbitron-SemiBold': require('../assets/fonts/Orbitron-SemiBold.ttf'),
    'Orbitron-Bold': require('../assets/fonts/Orbitron-Bold.ttf'),
    'Orbitron-ExtraBold': require('../assets/fonts/Orbitron-ExtraBold.ttf'),
    'Orbitron-Black': require('../assets/fonts/Orbitron-Black.ttf'),
  });

  if (!loaded) return null;
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <View style={styles.mainContainer}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="(tabs)" />
        </Stack>
      </View>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
