import { StateSchema } from "app/providers/StoreProvider"

export const getGamesList = (state: StateSchema) => state.gamesList.data

export const getPlatform = (state: StateSchema) => state.gamesList.platform

export const getSort = (state: StateSchema) => state.gamesList.sort

export const getCategory = (state: StateSchema) => state.gamesList.category

export const getDataList = (state: StateSchema) => state.gamesList.dataList

export const getIsLoading = (state: StateSchema) => state.gamesList.isLoading