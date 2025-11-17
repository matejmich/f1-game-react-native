import { router } from 'expo-router';
import { FlatList, StyleSheet } from 'react-native';
import GameButton from '../components/GameButton';
import TabLayout from '../components/TabLayout';
import gamesList from '../games/gameList';

export default function GameListScreen() {
  const handleGamePress = (gameId: string) => {
    router.push(`/(tabs)/games/${gameId}`);
  };
  return (
    <TabLayout title="Games">
      <FlatList
        data={gamesList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GameButton item={item} onPress={handleGamePress} />}
        numColumns={2}
        contentContainerStyle={styles.buttonListContainer}
        columnWrapperStyle={styles.columnWrapper}
      />
    </TabLayout>
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
