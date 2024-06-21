import { TouchableOpacityProps } from 'react-native'

import {
    Container,
    ButtonCard,
    TextCard
} from './styles'

export function ListCard() {
    return (
        <Container>
            <ButtonCard>
                <TextCard>Dados do Gastos</TextCard>
                <TextCard>Descrição:</TextCard>
                <TextCard>Valor: </TextCard>
                <TextCard>Data da Compra: </TextCard>
                <TextCard>Categoria: </TextCard>
                <TextCard>Local da Compra:</TextCard>
            </ButtonCard>
        </Container>
    )
}


