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
	sort: "release - date",
    platform: "all",
	data: [],
	dataList: []
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
		setIsLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload
        },
        setPage: (state) => {
			
			if (state.data && ((state.page + 1) * state.limit > state.data.length)) {
				state.hasMore = false
			}
			state.page = state.page + 1
			// state.page = state.page + 1
			// if (state.data && state.data?.length > state.limit) {
			// 	state.dataList = state.data.slice(0, state.limit * state.page)
			// } else {

			// }
			// state.dataList = (state.data && state.data?.length > state.limit) ? state.data.slice(0, state.limit * state.page) : state.data
		},
		setDataList: (state) => {
			state.dataList = (state.data && state.hasMore && state.data?.length > state.limit) ? state.data.slice(0, state.limit * state.page) : state.data
		},
		setData: (state, action: PayloadAction<GameCardTypes[]>) => {
			state.data = action.payload
			state.dataList = action.payload.length > state.limit ? action.payload.slice(0, state.limit) : action.payload
            // state.isLoading = false
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
            // state.isLoading = false
        }
	}
})

export const { reducer: mainContentReducer } = mainContentSlice
export const { actions: mainContentActions } = mainContentSlice