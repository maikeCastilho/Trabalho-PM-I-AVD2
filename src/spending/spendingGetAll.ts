import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { SPENDING_COLLECTION } from '../storage/storageConfig';
import { SpendingStorageDTO } from "./spendingstoragedto";

export async function spendingGetAll() {
    try {
      const storage = await AsyncStorage.getItem(SPENDING_COLLECTION)
  
      const spending: SpendingStorageDTO[] = storage
        ? JSON.parse(storage)
        : []
  
      return spending
    } catch (error) {
      Alert.alert('Atencao',
        'Não foi possível fazer a leitura dos dados !!')
      throw error;
    }
  }
