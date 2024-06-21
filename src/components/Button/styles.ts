import { Button, StyleSheet } from "react-native";
import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { TextInputMask } from 'react-native-masked-text'
const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    backgroundColor: '#1E90FF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%'
  },
  disabledButton: {
    backgroundColor: '#A9A9A9',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },


});

export default styles;