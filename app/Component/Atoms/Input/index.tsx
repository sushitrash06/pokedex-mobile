import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';
import { Control, Controller, FieldValues } from 'react-hook-form';

interface InputProps extends TextInputProps {
  control: Control<FieldValues> | any;
  name: string;
}

const InputComponent: React.FC<InputProps> = ({ control, name, ...rest }) => {
  return (
    <Controller
      control={control as Control<FieldValues>} // Explicitly cast control to Control<FieldValues>
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          style={styles.input}
          onChangeText={onChange}
          onBlur={onBlur}
          value={value}
          {...rest}
        />
      )}
      name={name}
      defaultValue=""
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default InputComponent;
