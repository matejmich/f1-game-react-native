import GeneralLayout from '@/components/GeneralLayout';
import { StyleSheet, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <GeneralLayout>
      <Text style={styles.text}>Hello from Home 🏁</Text>
    </GeneralLayout>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 24,
  },
});
