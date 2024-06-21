// hooks
import { Header } from '../../components/Header'
import {Container, Transactions} from './styles'
import { TransactionExpenses } from '../../components/TransactionsExpenses'
import { spendingGetAll } from '../../spending/spendingGetAll'
import { useEffect, useState, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { SpendingStorageDTO } from '../../spending/spendingstoragedto'
import { FlatList } from 'react-native'


export function ListExpenses() {
  const [dataExpenses, setDataExpenses] = useState<SpendingStorageDTO[]>([])

  async function loadDataSpending() {
    try { const data = await spendingGetAll()
    setDataExpenses(data)
  } catch(error) {
    console.error('Erro','Não foi possível ler os dados gravados!');
  }
  }

  useFocusEffect(useCallback(() => {
    loadDataSpending()
  },[]))

  return (
    <Container>
      <Header title='Listagem de Gastos' />

      {/* <Transactions> */}
      <FlatList data={dataExpenses} keyExtractor={item => item.id} 
      renderItem={({ item }) => <TransactionExpenses data={item}/>}
      showsVerticalScrollIndicator={false}/>
      {/* </Transactions> */}

    </Container>
  )
}
