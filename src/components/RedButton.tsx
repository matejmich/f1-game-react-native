import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../constants/colors';

export default function RedButton({ onPress, title }: { onPress: () => void; title: string }) {
  return (
    <TouchableOpacity style={styles.redButton} onPress={onPress}>
      <Text style={styles.redButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  redButton: {
    backgroundColor: colors.secondary,
    padding: 16,
    borderRadius: 8,
  },
  redButtonText: {
    color: colors.white,
    fontFamily: 'Orbitron-Bold',
  },
});
