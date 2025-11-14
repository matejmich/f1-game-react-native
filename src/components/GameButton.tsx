import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type GameButtonProps = {
  item: { id: string; name: string };
  onPress: (id: string) => void;
};

export default function GameButton({ item, onPress }: GameButtonProps) {
  return (
    <TouchableOpacity onPress={() => onPress(item.id)} style={styles.button}>
      <View style={styles.textContainer}>
        <Text>{item.name} </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    aspectRatio: 1,
    width: 130,
    backgroundColor: 'red',
    borderRadius: 20,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
