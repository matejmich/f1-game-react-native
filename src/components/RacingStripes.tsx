import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../constants/colors';

type Props = {
  segments?: number;
  height?: number;
  width?: number;
  color1?: string;
  color2?: string;
};

export default function RacingStripes({
  segments = 20,
  width = 10,
  height = 6,
  color1 = colors.white,
  color2 = colors.primary,
}: Props) {
  return (
    <View style={styles.row}>
      {Array.from({ length: segments }).map((_, i) => (
        <View
          key={i}
          style={{
            width,
            height,
            backgroundColor: i % 2 === 0 ? color1 : color2,
          }}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});
