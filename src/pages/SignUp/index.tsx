// import { useState } from 'react'
// import { useNavigation } from '@react-navigation/native'
// import  Button  from '../../components/Button'
// import  Header  from '../../components/Header/'
// import  Input  from '../../components/Input'
// import { Container } from './styles'

// export function SignUp() {
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   const navigation = useNavigation()

//   function handleGoBack() {
//     navigation.goBack()
//   }

//   return (
//     <Container>
//       <Header title='Crie sua Conta' />

//       <Input
//         placeholder='Nome'
//         placeholderTextColor='#363F5F'
//         value={name}
//         onChangeText={value => setName(value)}
//       />

//       <Input
//         placeholder='E-mail'
//         placeholderTextColor='#363F5F'
//         value={email}
//         onChangeText={value => setEmail(value)}
//       />

//       <Input
//         placeholder='Senha'
//         placeholderTextColor='#363F5F'
//         value={password}
//         onChangeText={value => setPassword(value)}
//       />

//       <Button
//         onPress={ () => {} }
//         title='Criar e acessar'
//       />

//       <Button
//         title='Voltar para o login'
//         onPress={handleGoBack}
//       />

//     </Container>
//   )
// }
