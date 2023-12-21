import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";

import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { PlayerStorageDTO } from "./PlayerStorageDTO";
import { playersGetByGroup } from "./playersGetByGroup";

export const playersGetByGroupAndTeam = async (group: string, team: string) => {
  try {
    const storage = await playersGetByGroup(group);
    const players: PlayerStorageDTO[] = storage.filter(
      (player) => player.team === team
    );
    return players;
  } catch (error) {
    throw error;
  }
};
