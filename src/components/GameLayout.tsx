import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../constants/colors';

export default function GameLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>{title}</Text>
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  header: {
    fontSize: 24,
    fontFamily: 'Orbitron-Bold',
    color: colors.secondary,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    width: '100%',
  },
});
