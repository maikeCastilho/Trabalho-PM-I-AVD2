import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    width: 100%;
    padding: ${RFValue(10)}px;
`;

export const ButtonCard = styled.TouchableOpacity`
    width: 100%;
    padding: ${RFValue(6)}px;
    background-color: ${({ theme }) => theme.colors.text};
    border-radius: ${RFValue(10)}px;
`

export const TextCard = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(26)}px;
    font-weight: bold;
    flex-direction: row;
`
