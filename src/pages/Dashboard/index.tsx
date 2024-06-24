import { useState } from "react";
import { Alert, TextInput } from 'react-native'
import { spendingCreate } from "../../spending/spendingCreate";
import { spendingGetAll } from "../../spending/spendingGetAll";
import Button from '../../components/Button'
import Header from '../../components/Header'
import Input from '../../components/Input'
import { Container } from './styles'
import { InputAmount } from '../../components/InputAmount'
import { InputDate } from '../../components/InputDate'

export function Dashboard() {
    const [invoice, setInvoice] = useState('')
    const [taxCode, setTaxCode] = useState('')
    const [invoiceAmount, setInvoiceAmount] = useState()
    const [state, setState] = useState('')
    const [supplier, setSupplier] = useState('')
    let taxAmount:number = 0

    const validCodes = ["1234", "6789", "1708", "5952"]
    const validState = ["RJ", "SP", "MG"]
    const validSuppliers = ["Totvs", "Microsoft"]

    async function handleAddNewSpending() {
        if (invoice.trim() === '' || taxCode.trim() === ''
            || invoiceAmount.trim() === '' || state.trim() === ''
            || supplier.trim() === '') {

            return Alert.alert('Atencao', 'Todos os campos devem ser preenchidos')
        }

        if (!validCodes.includes(taxCode)){
            return Alert.alert('Atenção', 'Código inválido. Aceitamos apenas os códigos 1234, 6789, 1708 e 5952.');
        }

        if (!validState.includes(state)){
            return Alert.alert('Atenção', 'Estado inválido. Aceitamos somente "RJ", "SP", "MG"');
        }

        if (!validSuppliers.includes(supplier)){
            return Alert.alert("Forncedor inválido", 'Deu ruim')
        }
        console.log(invoiceAmount)

        const numericInvoiceAmount = parseFloat(invoiceAmount.replace('R$', '').replace('.', '').trim());

        console.log(numericInvoiceAmount)

        if ((taxCode === '1234' || taxCode === '6789') && state == 'RJ'){
            taxAmount = numericInvoiceAmount * 0.01// Convertendo para string com 2 casas decimais
        }

        if ((taxCode === '1234' || taxCode === '6789') && state == 'SP'){
            taxAmount = numericInvoiceAmount * 0.02// Convertendo para string com 2 casas decimais
        }

        if ((taxCode === '1234' || taxCode === '6789') && state == 'MG'){
            taxAmount = numericInvoiceAmount * 0.03// Convertendo para string com 2 casas decimais
        }

        const data = {
            id: String(new Date().getTime()),
            invoice,
            taxCode,
            invoiceAmount: numericInvoiceAmount,            
            state,
            supplier,
            taxAmount,
        }

        setInvoice('')
        setTaxCode('')
        setInvoiceAmount('')
        setState('')
        setSupplier('')

        await spendingCreate(data)
        const result = await spendingGetAll()
        console.log(result)
    }


    return (
        <Container
        >
            <Header title='Super Notas 2.0!' />

            <Input
                keyboardType="default"
                placeholder="Nota Fiscal"
                placeholderTextColor="#363F5F"
                value={invoice}
                onChangeText={(value) => setInvoice(value)}
            />

            <Input
                keyboardType="number-pad"
                placeholder='Código do imposto'
                placeholderTextColor='#363F5F'
                value={taxCode}
                onChangeText={value => setTaxCode(value)}
            />

            <InputAmount
                placeholder='Valor da nota'
                placeholderTextColor='#363F5F'
                value={invoiceAmount}
                onChangeText={value => setInvoiceAmount(value)}
            />

            <Input
                keyboardType="default"
                placeholder='Estado'
                placeholderTextColor='#363F5F'
                value={state}
                onChangeText={value => setState(value)}
            />

            <Input
                placeholder='Fornecedor'
                placeholderTextColor='#363F5F'
                value={supplier}
                onChangeText={value => setSupplier(value)}
            />

            <Button
                title='Cadastrar'
                onPress={handleAddNewSpending}
            />

        </Container>
    )
}