import HistoryCard from "../../components/HistoryCard"
import { spendingGetAll } from '../../spending/spendingGetAll'
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { Alert } from "react-native";
import { FlatList } from "react-native";
import {Container,  Content, Title} from "./style";
import { SpendingStorageDTO } from "../../spending/spendingstoragedto";
import Header from '../../components/Header'

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
      const groupedData: { [key: string]: { invoiceAmount: number, taxAmount: number }} = data.reduce((acc, item) => {
        const key = `${item.supplier}, ${item.state}`;
        if (!acc[key]) {
          acc[key] = { invoiceAmount: 0, taxAmount: 0 };
        }
        acc[key].invoiceAmount += item.invoiceAmount;
        acc[key].taxAmount += item.taxAmount;
    
        return acc;
      }, {} as { [key: string]: { invoiceAmount: number, taxAmount: number } });

      // Convertendo o objeto agrupado em um array de objetos
      const formattedData: GroupedData[] = Object.entries(groupedData).map(([key, value]) => ({
        title: key,
        amount: value.invoiceAmount.toFixed(2).toString().replace('.', ','),
        taxAmount: value.taxAmount.toFixed(2).toString().replace('.', ','),
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
      <Header title="Resumo por Categoria" />
    

      <Content contentContainerStyle={{ padding: 24 }}>
        <FlatList
          data={dataExpenses}
          keyExtractor={item => item.title}
          renderItem={({ item }) => (
            <HistoryCard amount={item.amount} title={item.title} taxAmount={item.taxAmount}/>
          )}
          showsVerticalScrollIndicator={false}
        />
      </Content>
    </Container>
  );
}

