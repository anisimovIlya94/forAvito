import { StateSchema } from "app/providers/StoreProvider"

export const getGameData = (state: StateSchema) => state.game.data

export const getGameIsLoading = (state: StateSchema) => state.game.isLoading

export const getGameTime = (state: StateSchema) => state.game.time