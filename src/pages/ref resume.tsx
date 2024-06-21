// import { HistoryCard } from "../../components/HistoryCard";
// import { FlatList } from "react-native";

// import { Alert } from "react-native";
// import { spendingGetAll } from '../../spending/spendingGetAll'
// import { useCallback, useState } from "react";
// import { SpendingStorageDTO } from "../../spending/SpendingStorageDTO";
// import { Description } from "../../components/TransactionsExpenses/styles";
// import { Category } from "../../components/TransactionsExpenses/styles";
// import { useFocusEffect } from "@react-navigation/native";
// import { Amount } from "../../components/TransactionsExpenses/styles";
// import { numberToBRL, brlToNumber } from "../../components/TransactionsExpenses";
// import { calcularImposto } from "../../components/TransactionsExpenses";
// import {
//   Container,
//   Content,
//   Header,
//   Title
// } from "./style";


// type Props = {
//   data: SpendingStorageDTO;
// }

// export function Resume() {
//   const [dataExpenses, setDataExpenses] = useState<SpendingStorageDTO[]>([]);

//   async function loadDataSpending() {
//     try {
//       const data = await spendingGetAll();
//       setDataExpenses(data);
//     } catch (error) {
//       console.log(error);
//       Alert.alert('Erro', 'Não foi possível ler os dados gravados');
//     }
//   }

//   useFocusEffect(
//     useCallback(() => {
//       loadDataSpending();
//     }, [])
//   );

//   return (
//     <Container>
//       <Header>
//         <Title>Resumo por Categoria</Title>
//       </Header>

//       <Content contentContainerStyle={{ padding: 24 }}>
//         <FlatList
//           data={dataExpenses}
//           keyExtractor={item => item.id.toString()} // Se item.id não for uma string
//           renderItem={({ item }) => (
//             <TransactionExpenses data={item} />
//           )}
//           showsVerticalScrollIndicator={false}
//         />
//       </Content>
//     </Container>
//   );
// }

// export function TransactionExpenses({ data }: Props) {

//   const imposto = calcularImposto(data);
//   const valorOriginal = brlToNumber(data.invoiceValue);
//   const valorTotal = imposto + valorOriginal;

//   return (
//     <Container>
//       <Description>Fornecedor: {data.supplier}</Description>
//       <Category>Estado: {data.state}</Category>
//       <Amount>Valor Total: {numberToBRL(valorTotal)}</Amount>
//     </Container>
//   );
// }
