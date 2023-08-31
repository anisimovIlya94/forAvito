
import {
	createSlice,
	PayloadAction,
} from "@reduxjs/toolkit"
import { GameSchema } from "../types/gameSchema";
import { GameTypes } from "../types/game";

const initialState: GameSchema = {
    isLoading: false,
	error: undefined,
    data: null,
    time: 0
}
  
const GameSlice = createSlice({
	name: "game",
	initialState,
	reducers: {
		setData: (state, action: PayloadAction<GameTypes>) => {
			state.data = action.payload
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
        setTime: (state, action: PayloadAction<number>) => {
            state.time = action.payload
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
	}
})

export const { reducer:gameReducer } = GameSlice
export const { actions: gameActions } = GameSlice