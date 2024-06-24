import HistoryCard from "../../components/HistoryCard"
import { spendingGetAll } from '../../spending/spendingGetAll'
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { Alert } from "react-native";
import { FlatList } from "react-native";

import {
  Container,
  Content,
  Header,
  Title
} from "./style";
import { Amount, Category, Description } from "../../components/TransactionsExpenses/styles";
import { SpendingStorageDTO } from "../../spending/spendingstoragedto";
import { TransactionExpenses } from "../../components/TransactionsExpenses";

interface GroupedData {
  title: string;
  amount: string;
}

export function Resume() {
  const [dataExpenses, setDataExpenses] = useState<GroupedData[]>([]);

  async function loadDataSpending() {
    try {
      const data: SpendingStorageDTO[] = await spendingGetAll();

      // Agrupando os dados por fornecedor e estado
      const groupedData: { [key: string]: number } = data.reduce((acc, item) => {
        const key = `${item.supplier}, ${item.state}`;
        if (!acc[key]) {
          acc[key] = 0;
        }
        acc[key] += item.invoiceAmount;
        return acc;
      }, {} as { [key: string]: number });

      // Convertendo o objeto agrupado em um array de objetos
      const formattedData: GroupedData[] = Object.entries(groupedData).map(([key, value]) => ({
        title: key,
        amount: value.toFixed(2).toString().replace('.', ',') // Convertendo para string com vírgula como separador decimal
      }));

      setDataExpenses(formattedData);
    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Não foi possível ler os dados gravados');
    }
  }

  useFocusEffect(
    useCallback(() => {
      loadDataSpending();
    }, [])
  );

  return (
    <Container>
      <Header>
        <Title>Resumo por Categoria</Title>
      </Header>

      <Content contentContainerStyle={{ padding: 24 }}>
        <FlatList
          data={dataExpenses}
          keyExtractor={item => item.title}
          renderItem={({ item }) => (
            <HistoryCard amount={item.amount} title={item.title} />
          )}
          showsVerticalScrollIndicator={false}
        />
      </Content>
    </Container>
  );
}

