import gamesList from '@/src/games/gameList';
import { useLocalSearchParams } from 'expo-router';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function GameScreen() {
  const { game } = useLocalSearchParams<{ game: string }>();
  const GameComponent = gamesList.find((g) => g.id === game)?.component;

  return (
    <SafeAreaView>{!!GameComponent ? <GameComponent /> : <Text>Game not found</Text>}</SafeAreaView>
  );
}
