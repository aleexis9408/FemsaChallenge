import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

interface Props {
  text: string;
  hadleOnPress(): void;
  customStyle?: {
    button?: StyleProp<ViewStyle>;
    button_text?: StyleProp<TextStyle>;
  };
}

export const Button = ({text, hadleOnPress, customStyle}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.button, customStyle?.button]}
      onPress={hadleOnPress}>
      <Text style={[styles.button_text, customStyle?.button_text]}>{text}</Text>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  button: {
    backgroundColor: '#334FFA',
    width: '100%',
    height: 50,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 21,
  },
});