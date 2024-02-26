import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './styles';

interface CardBoxProps {
  title?: string; // Optional title for the card
  children: React.ReactNode; // Content to be displayed inside the card
}

const CardBox: React.FC<CardBoxProps> = ({ title, children }) => {
  return (
    <View style={[styles.cardBox]}>
      {title && <Text style={styles.cardTitle}>{title}</Text>}
      {children}
    </View>
  );
};

export default CardBox;
