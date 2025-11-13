import { useLocalSearchParams } from 'expo-router';
import { Text } from 'react-native';

const gamesMap: Record<string, React.ComponentType> = {
  //   '1': Game1,
  //   '2': Game2,
};

export default function GameScreen() {
  const { game } = useLocalSearchParams<{ game: string }>();
  const GameComponent = gamesMap[game];

  if (!GameComponent) return <Text>Game not found</Text>;

  return <GameComponent />;
}
