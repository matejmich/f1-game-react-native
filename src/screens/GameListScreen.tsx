import { router } from 'expo-router';
import { FlatList, StyleSheet, Text } from 'react-native';
import GameButton from '../components/GameButton';
export default function GameListScreen() {
  const gamesList = [
    { id: '1', name: 'Game 1' },
    { id: '2', name: 'Game 2' },
    { id: '3', name: 'Game 3' },
  ];

  const handleGamePress = (gameId: string) => {
    router.push(`/(tabs)/games/${gameId}`);
  };
  return (
    <>
      <Text>Games</Text>
      <FlatList
        data={gamesList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GameButton item={item} onPress={handleGamePress} />}
        numColumns={2}
        contentContainerStyle={styles.buttonListContainer}
        columnWrapperStyle={styles.columnWrapper}
      />
    </>
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
