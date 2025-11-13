import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../constants/colors';
import NavigationButton from './NavigationButton';

type GeneralLayoutProps = {
  children: React.ReactNode;
};

export default function GeneralLayout({ children }: GeneralLayoutProps) {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.childrenContainer}>{children}</View>
      <View style={styles.buttonContainer}>
        <NavigationButton link={'/'} />
        <Text style={styles.title}>placeholder</Text>
        <NavigationButton modal />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  childrenContainer: {
    flex: 1,
  },
});
