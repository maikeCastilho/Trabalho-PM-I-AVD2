import { Header } from '../../components/Header'
import { Container, Transactions } from './styles'
import  Input  from '../../components/Input'
import  Button  from "../../components/Button"
import { useState } from 'react'
import { Alert, FlatList } from 'react-native'
import { spendingGetAll } from '../../spending/spendingGetAll'
import { SpendingStorageDTO } from '../../spending/spendingstoragedto'
import { TransactionExpenses } from '../../components/TransactionsExpenses'


export function SearchExpenses() {
  const [category, setCategory] = useState('')
  const [dataExpenses, setDataExpenses] = useState<SpendingStorageDTO[]>([])

  async function handleSearchSpending() {
    if (category.trim() == ''){
      return Alert.alert('atencao deu ruim')
    }

    const data = await spendingGetAll()
    const newData = data.filter(dat => dat.category.toLowerCase().includes(category.toLowerCase()))

    if (newData.length == 0){
      Alert.alert("Atenção", "Categoria Inexistente")
      setCategory('')
      setDataExpenses([])
      return
    }

    setDataExpenses(newData)

    console.log(data)
  }


  return (
    <Container>
      <Header title='Pesquisa Gastos' />

      <Input
        placeholder='Categoria'
        placeholderTextColor='#363F5F'
        onChangeText={value => setCategory(value)}
      />

      <Button
        onPress={handleSearchSpending}
        title='Pesquisa'
      />

      <Transactions>
      </Transactions>

      <FlatList
        data = {dataExpenses}
        keyExtractor={item => item.id}
        renderItem={({item}) =>
           <TransactionExpenses data={item} />
      }
      />
    </Container>
  )
}

