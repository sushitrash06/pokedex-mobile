import React, { FC, ReactNode } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface ButtonProps {
  Title?: string;
  type?: 'main' | 'transparent' | 'warning';
  onPress: () => void;
  Icon?: ReactNode

}

const ButtonComponent: FC<ButtonProps> = ({ Title, Icon, type = 'main', onPress }) => {
  const buttonStyles = getButtonStyles(type);

  return (
    <TouchableOpacity
      style={[buttonStyles]}
      onPress={onPress}
    >
      <Text>{Title}</Text>
      {Icon}
    </TouchableOpacity>
  );
};

const getButtonStyles = (type: ButtonProps['type']) => {
  switch (type) {
    case 'main':
      return styles.mainButton;
    case 'transparent':
      return styles.transparentButton;
    case 'warning':
      return styles.warningButton;
    default:
      return styles.mainButton;
  }
};

const styles = StyleSheet.create({
  mainButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  transparentButton: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  warningButton: {
    backgroundColor: '#ff7f0e',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  disabledButton: {
    opacity: 0.5,
  },
});

export default ButtonComponent;
