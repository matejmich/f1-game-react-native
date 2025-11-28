import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../constants/colors';

type GameButtonProps = {
  item: { id: string; name: string; description: string };
  onPress: (id: string) => void;
};

export default function GameButton({ item, onPress }: GameButtonProps) {
  return (
    <TouchableOpacity onPress={() => onPress(item.id)} style={styles.button}>
      <View style={styles.textContainer}>
        <Text style={styles.textName}>{item.name} </Text>
        <Text style={styles.textDescription}>{item.description} </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.secondary,
    borderRadius: 20,
    minHeight: 80,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 16,
  },
  textName: {
    fontFamily: 'Orbitron-Bold',
    color: colors.white,
    textAlign: 'center',
    fontSize: 18,
  },
  textDescription: {
    fontFamily: 'Orbitron-Regular',
    color: colors.greyLightest,
    textAlign: 'center',
    fontSize: 14,
  },
});
