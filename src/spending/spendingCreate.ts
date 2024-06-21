import AsyncStorage from "@react-native-async-storage/async-storage";
import { SpendingStorageDTO } from "./spendingstoragedto";
import { SPENDING_COLLECTION } from "../storage/storageConfig";
import { Alert } from "react-native";
import { spendingGetAll } from "./spendingGetAll";

export async function spendingCreate(
  newSpending: SpendingStorageDTO) {

  try {
    const storageSpending = await spendingGetAll()
    // ... spread operator / cópia
    const storage = [...storageSpending, newSpending]
    await AsyncStorage.setItem(SPENDING_COLLECTION,
      JSON.stringify(storage))
  } catch (error) {
    Alert.alert('Atencao', 'Não foi possível fazer a gravação')
    console.log('Não foi possível fazer a gravação')
    throw error;
  }
}