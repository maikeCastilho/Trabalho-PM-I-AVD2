import styled from 'styled-components/native'
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
export const Container = styled.View`
    flex: 1;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background};
`
export const Content = styled.View`
    width: 100%;
    padding: ${RFValue(6)}px;
    border-radius: ${RFValue(10)}px;
`

export const TextCard = styled.Text`
    color: ${({ theme }) => theme.colors.text_dark};
    font-size: ${RFValue(18)}px;
    font-weight: bold;
`

export const Transactions = styled.View`
    flex: 1;
    padding: 0 24px;
    margin-top: ${RFPercentage(4)}px;
`