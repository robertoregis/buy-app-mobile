
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('window');

// Você pode passar a foto e o nome do usuário como props
interface CircleMagicProps {
  type: string;
}

export default function CircleMagic({ type }: CircleMagicProps) {
  return (
    <View style={styles.circleMagic}>
    </View>
  );
}

const styles = StyleSheet.create({
  circleMagic: {
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: '#d81024ff',
    right: 4,
    top: 4
  },
});