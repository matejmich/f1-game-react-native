import colors from '@/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { Href, Link } from 'expo-router';
import { StyleSheet, TouchableOpacity } from 'react-native';

type NavigationButtonProps = {
  link?: Href;
  modal?: boolean;
};

export default function NavigationButton({ link, modal }: NavigationButtonProps) {
  const isLink = Boolean(link);
  if (isLink) {
    return (
      <Link href={link!}>
        <TouchableOpacity style={styles.navigationButton}>
          <Ionicons name="home" size={32} style={styles.navigationIcon} />
        </TouchableOpacity>
      </Link>
    );
  } else if (modal) {
    return (
      <TouchableOpacity style={styles.navigationButton}>
        <Ionicons name="help" size={32} style={styles.navigationIcon} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  navigationButton: {
    padding: 16,
    backgroundColor: colors.primary,
    borderRadius: '50%',
    boxShadow: '0 0 10px ' + colors.secondary,
  },
  navigationIcon: {
    color: colors.secondary,
  },
});
