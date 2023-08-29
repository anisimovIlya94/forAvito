import { MainContentSchema, PlatformField, SortField } from './../types/MainContentSchema';
import { StateSchema } from "app/providers/StoreProvider"

import {
	createSlice,
	PayloadAction,
} from "@reduxjs/toolkit"
import { GameCardTypes } from 'entities/GameCard/model/types/gameCard';

const initialState: MainContentSchema = {
    isLoading: false,
	error: undefined,
	page: 1,
	hasMore: true,
	limit: 12,
	category: "all",
	sort: "release-date",
    platform: "all",
    data: null
}
  
const mainContentSlice = createSlice({
	name: "mainContent",
	initialState,
	reducers: {
		setCategory: (state, action: PayloadAction<string>) => {
			state.category = action.payload
		},
		setSort: (state, action: PayloadAction<SortField>) => {
			state.sort = action.payload
		},
		setPlatform: (state, action: PayloadAction<PlatformField>) => {
			state.platform = action.payload
		},
		setHasMore: (state, action: PayloadAction<boolean>) => {
			state.hasMore = action.payload
        },
        setPage: (state) => {
			state.page = state.page + 1
        },
        setData: (state, action: PayloadAction<GameCardTypes[]>) => {
            state.data = action.payload
            state.isLoading = false
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
            state.isLoading = false
        }
	}
})

export const { reducer: mainContentReducer } = mainContentSlice
export const { actions: mainContentActions } = mainContentSlice