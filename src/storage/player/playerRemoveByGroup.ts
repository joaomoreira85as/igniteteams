import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";

import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { PlayerStorageDTO } from "./PlayerStorageDTO";
import { playersGetByGroup } from "./playersGetByGroup";

export const playerRemoveByGroup = async (
  playerName: string,
  group: string
) => {
  try {
    const storage = await playersGetByGroup(group);

    const filtered: PlayerStorageDTO[] = storage.filter(
      (player) => player.name !== playerName
    );
    const players = JSON.stringify(filtered);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, players);

    return players;
  } catch (error) {
    throw error;
  }
};
