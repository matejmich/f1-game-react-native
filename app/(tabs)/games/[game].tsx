import { useLocalSearchParams } from 'expo-router';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const gamesMap: Record<string, React.ComponentType> = {
  //   '1': Game1,
  //   '2': Game2,
};

export default function GameScreen() {
  const { game } = useLocalSearchParams<{ game: string }>();
  const GameComponent = gamesMap[game];

  return (
    <SafeAreaView>{!!GameComponent ? <GameComponent /> : <Text>Game not found</Text>}</SafeAreaView>
  );
}
