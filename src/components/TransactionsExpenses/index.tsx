import { SpendingStorageDTO } from "../../spending/spendingstoragedto";
import {
  Container,
  Description,
  Amount,
  Local,
  Footer,
  Category,
  Date,
} from "./styles";

type Props = {
  data: SpendingStorageDTO
}

export function TransactionExpenses({data}: Props) {
  return (
    <Container>
      <Description>{data.invoice}</Description>
      <Amount>{data.taxCode}</Amount>
      <Local>Valor da nota: {data.invoiceAmount}</Local>
      <Local>Imposto: {data.taxAmount}</Local>

      <Footer>
        <Category>{data.state}</Category>
        <Date>{data.supplier}</Date>
      </Footer>

    </Container>
  )
}