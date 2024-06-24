import {
  Container,
  Title,
  Amount
} from './styles'

interface Props {
  title: string;
  amount: string;
  taxAmount: string; 
}

export function HistoryCard({
  title,
  amount,
  taxAmount
}: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <Amount>nf: R$:{amount}</Amount>
      <Amount>iof: R$:{taxAmount}</Amount>
    </Container>
  )
}

export default HistoryCard