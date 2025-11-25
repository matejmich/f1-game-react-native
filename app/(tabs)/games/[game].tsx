import gamesList from '@/src/games/gameList';
import { useLocalSearchParams } from 'expo-router';
import { Text } from 'react-native';

export default function GameScreen() {
  const { game } = useLocalSearchParams<{ game: string }>();
  const GameComponent = gamesList.find((g) => g.id === game)?.component;

  return !!GameComponent ? <GameComponent /> : <Text>Game not found</Text>;
}
