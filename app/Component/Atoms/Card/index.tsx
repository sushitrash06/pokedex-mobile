import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './styles';

interface CardBoxProps {
  children: React.ReactNode;
}

const CardBox: React.FC<CardBoxProps> = ({children }) => {
  return (
    <View style={styles.card}>
      {children}
    </View>
  );
};

export default CardBox;
