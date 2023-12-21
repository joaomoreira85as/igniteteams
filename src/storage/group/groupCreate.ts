import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";

import { groupsGetAll } from "./groupsGetAll";
import { GROUP_COLLECTION } from "@storage/storageConfig";

export const groupCreate = async (newGroupName: string) => {
  try {
    const storedGroups = await groupsGetAll();

    const groupAllreadyExists = storedGroups.includes(newGroupName);

    if (groupAllreadyExists) {
      throw new AppError("Já existe uma turma cadastrada com esse nome.");
    }

    const storage = JSON.stringify([...storedGroups, newGroupName]);
    await AsyncStorage.setItem(GROUP_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
};
