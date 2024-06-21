import React from 'react';
import { TextInputProps } from 'react-native';
import { Container, InputStyle } from './styles';

type InputProps = TextInputProps;

export function InputAmount({ ...rest }: InputProps) {
  return (
    <Container>
      <InputStyle
        type={'custom'}
        options={{
          mask: '*',
        }}
        {...rest}
      />
    </Container>
  );
}

export default InputAmount;
