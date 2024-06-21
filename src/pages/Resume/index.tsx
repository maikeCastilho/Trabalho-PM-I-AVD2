import  HistoryCard  from "../../components/HistoryCard"
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

export function Resume() {
    const [dataExpenses, setDataExpenses] = useState<SpendingStorageDTO[]>([]);
  
    async function loadDataSpending() {
      try {
        const data = await spendingGetAll();
        setDataExpenses(data);
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
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <TransactionExpenses data={item} />
            )}
            showsVerticalScrollIndicator={false}
          />
        </Content>
      </Container>
    );
  }

  