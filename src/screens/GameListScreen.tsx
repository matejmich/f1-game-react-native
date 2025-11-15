import { router } from 'expo-router';
import { FlatList, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import GameButton from '../components/GameButton';
import gamesList from '../games/gameList';

export default function GameListScreen() {
  const handleGamePress = (gameId: string) => {
    router.push(`/(tabs)/games/${gameId}`);
  };
  return (
    <SafeAreaView>
      <Text>Games</Text>
      <FlatList
        data={gamesList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GameButton item={item} onPress={handleGamePress} />}
        numColumns={2}
        contentContainerStyle={styles.buttonListContainer}
        columnWrapperStyle={styles.columnWrapper}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  buttonListContainer: {
    gap: 20,
    padding: 20,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
});
