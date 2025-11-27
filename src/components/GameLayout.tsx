import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../constants/colors';

export default function GameLayout({
  title,
  children,
  description,
}: {
  title: string;
  children: React.ReactNode;
  description?: string;
}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>{title}</Text>
      {description && <Text style={styles.description}>{description}</Text>}
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
  description: {
    fontSize: 12,
    fontFamily: 'Orbitron-Medium',
    color: colors.grey,
    textAlign: 'center',
    marginVertical: 4,
  },
});
