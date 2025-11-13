import { router } from 'expo-router';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const gamesList = [
  { id: '1', name: 'Game 1' },
  { id: '2', name: 'Game 2' },
  { id: '3', name: 'Game 3' },
];

const handleGamePress = (gameId: string) => {
  router.push(`/(tabs)/games/${gameId}`);
};

export default function GamesScreen() {
  return (
    <SafeAreaView>
      <FlatList
        data={gamesList}
        keyExtractor={(game) => game.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleGamePress(item.id)}>
            <View>
              <Text>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}
