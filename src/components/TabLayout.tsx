import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../constants/colors';
import RacingStripes from './RacingStripes';

type TabLaoutProps = {
  children: React.ReactNode;
  title: string;
};

export default function TabLayout({ children, title }: TabLaoutProps) {
  return (
    <LinearGradient
      colors={[colors.primary, colors.primaryLight]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.background}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.stripesOuterContainer}>
          <RacingStripes
            color1={colors.white}
            color2={colors.secondary}
            segments={20}
            width={30}
            height={8}
          />
          <View style={styles.stripesLine} />
        </View>
        <View style={styles.childrenContainer}>{children}</View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  buttonListContainer: {
    gap: 20,
    padding: 20,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 32,
    fontFamily: 'Orbitron-Bold',
    textAlign: 'center',
    color: colors.white,
  },
  stripesOuterContainer: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stripesLine: {
    height: 4,
    width: '100%',
    backgroundColor: colors.white,

    shadowColor: colors.white,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 20,
  },
  stripesInnerContainer: {
    flexDirection: 'row',
  },
  childrenContainer: {
    flex: 1,
    paddingTop: 8,
  },
});
