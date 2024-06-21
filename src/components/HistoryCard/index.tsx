import {
  Container,
  Title,
  Amount
} from './styles'

interface Props {
  title: string;
  amount: string;
}

export function HistoryCard({
  title,
  amount,
}: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <Amount>{amount}</Amount>
    </Container>
  )
}

export default HistoryCard