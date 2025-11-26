import { Image } from 'expo-image';
import { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RedButton from '../components/RedButton';
import TabLayout from '../components/TabLayout';
import colors from '../constants/colors';
import { Pilot, pilots, teams } from '../constants/f1_lineup';
import { useScoringStore } from '../stores/ScoringStore';

export default function LeaderboardScreen() {
  const scores = useScoringStore((state) => state.scores);
  const placement: number = useMemo(() => {
    const scoreValues = Object.values(scores);
    if (scoreValues.length === 0) {
      return 20;
    }
    const total = scoreValues.reduce((acc, val) => acc + val, 0);
    const avg = total / scoreValues.length;
    return 20 - Math.floor(avg * 19); // map 0-1 to 20-1
  }, [scores]);
  const clearScores = useScoringStore((state) => state.clearScores);
  return (
    <TabLayout title="Leaderboard">
      <Text>
        Leaderboard Screen Average Score: {placement.toFixed(2)} {pilots.length}
      </Text>
      <View style={styles.container}>
        <View style={styles.leaderBoardContainer}>
          {pilots.map((pilot, index) => (
            <PilotComponent
              key={index}
              pilot={pilot}
              isActive={index + 1 === placement}
              placement={index + 1}
            />
          ))}
        </View>
        <View style={styles.driverBoardContainer}>
          <RedButton onPress={clearScores} title="Clear Score" />
          <Text style={styles.pilotText}>score: {scores['3']}</Text>
        </View>
      </View>
    </TabLayout>
  );
}

type PilotProps = {
  pilot: Pilot;
  isActive: boolean;
  placement: number;
};

const PilotComponent = ({ pilot, isActive, placement }: PilotProps) => {
  const surname = pilot.name.split(' ').slice(-1)[0];
  const shortcut = surname.slice(0, 3).toUpperCase();
  return (
    <View style={styles.pilot}>
      <Text style={styles.placement}>{placement}</Text>
      <View style={[styles.pilotStripe, { backgroundColor: teams[pilot.teamId].color }]} />
      <Image
        source={teams[pilot.teamId].mini}
        style={{ width: 16, height: 16, marginHorizontal: 8 }}
        contentFit="contain"
      />
      <Text
        style={[styles.pilotText, { color: isActive ? teams[pilot.teamId].color : colors.white }]}
      >
        {shortcut}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leaderBoardContainer: {
    borderColor: 'red',
    borderWidth: 2,
    width: 140,
    gap: 12,
    paddingVertical: 12,
  },
  driverBoardContainer: {
    borderBlockColor: 'blue',
    borderWidth: 2,
    flex: 1,
  },
  pilot: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pilotStripe: {
    height: '100%',
    width: 5,
  },
  placement: {
    width: 28,
    textAlign: 'center',
    color: colors.white,
    fontFamily: 'Orbitron-Bold',
  },
  pilotText: {
    fontFamily: 'Orbitron-ExtraBold',
    color: colors.white,
  },
});
