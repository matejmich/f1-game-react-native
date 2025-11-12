import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false }} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
