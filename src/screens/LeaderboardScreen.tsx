import { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabLayout from '../components/TabLayout';
import colors from '../constants/colors';
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
  return (
    <TabLayout title="Leaderboard">
      <Text>
        Leaderboard Screen Average Score: {placement.toFixed(2)} {pilots.length}
      </Text>
      <View style={styles.container}>
        <View style={styles.leaderBoardContainer}>
          {pilots.map((pilot, index) => (
            <Pilot
              key={index}
              pilot={pilot}
              isActive={index + 1 === placement}
              placement={index + 1}
            />
          ))}
        </View>
        <View style={styles.driverBoardContainer}></View>
      </View>
    </TabLayout>
  );
}

type PilotProps = {
  pilot: Pilot;
  isActive: boolean;
  placement: number;
};

const Pilot = ({ pilot, isActive, placement }: PilotProps) => {
  const surname = pilot.name.split(' ').slice(-1)[0];
  const shortcut = surname.slice(0, 3).toUpperCase();
  return (
    <View style={styles.pilot}>
      <Text style={styles.placement}>{placement}</Text>
      <View style={[styles.pilotStripe, { backgroundColor: pilot.color }]} />
      <Text style={[styles.pilotText, { color: isActive ? pilot.color : colors.white }]}>
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
    height: 40,
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
  },
});

type Pilot = {
  name: string;
  shortcut?: string;
  team: string;
  color: string;
};

const pilots: Pilot[] = [
  { name: 'Max Verstappen', team: 'Red Bull Racing', color: colors.team_redbull },
  {
    name: 'Fernando Alonso',
    team: 'Aston Martin',
    color: colors.team_astonmartin,
  },
  { name: 'Lewis Hamilton', team: 'Ferrari', color: colors.team_ferrari },
  { name: 'Yuki Tsunoda', team: 'Red Bull Racing', color: colors.team_redbull },
  { name: 'Lando Norris', team: 'Mclaren', color: colors.team_mclaren },
  { name: 'Oscar Piastri', team: 'Mclaren', color: colors.team_mclaren },
  { name: 'Lance Stroll', team: 'Aston Martin', color: colors.team_astonmartin },
  { name: 'Kimi Antonelli', team: 'Mercedes', color: colors.team_mercedes },
  { name: 'George Russell', team: 'Mercedes', color: colors.team_mercedes },
  { name: 'Charles Leclerc', team: 'Ferrari', color: colors.team_ferrari },
  { name: 'Esteban Ocon', team: 'Haas', color: colors.team_hass },
  { name: 'Oliver Bearman', team: 'Haas', color: colors.team_hass },
  { name: 'Pierre Gasly', team: 'Alpine', color: colors.team_alpine },
  { name: 'Franco Colapinto', team: 'Alpine', color: colors.team_alpine },
  { name: 'Nico Hulkenberg', team: 'Kick Sauber', color: colors.team_kicksauber },
  { name: 'Gabriel Bortoleto', team: 'Kick Sauber', color: colors.team_kicksauber },
  { name: 'Liam Lawson', team: 'Racing Bulls', color: colors.team_racingbulls },
  { name: 'Isaac Hadjar', team: 'Racing Bulls', color: colors.team_racingbulls },
  { name: 'Alex Albon', team: 'Williams', color: colors.team_williams },
  { name: 'Carlos Sainz', team: 'Williams', color: colors.team_williams },
];
