// import { useState } from 'react'
// import { useNavigation } from '@react-navigation/native'
// import { Text, StyleSheet, View } from 'react-native'
// import { AuthNavigatorRoutesProps } from '../../routes/Auth.routes'
// import  Button  from '../../components/Button'
// import  Header  from '../../components/Header'
// import  Input  from '../../components/Input'
// import { Container } from './styles'

// export function SignIn() {

//   const navigation = useNavigation<AuthNavigatorRoutesProps>()

//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   function handleNewAccount() {
//     navigation.navigate('signUp')
//   }

//   return (
//     <Container>
//       <Header title='Acesse sua Conta' />

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
//         title='Acessar'
//       />

//       <View style={styles.container}>
//         <Text style={styles.title}>Ainda não tem acesso?</Text>
//       </View>


//       <Button
//         title='Criar conta'
//         onPress={handleNewAccount}
//       />

//     </Container>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 250,
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   title: {
//     fontSize: 20
//   }
// })
