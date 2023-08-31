import { ReducersMapObject, configureStore } from "@reduxjs/toolkit"
import { StateSchema } from "./StateSchema"
import { rtkApi } from "shared/api/rtkApi"
import { mainContentReducer } from "widgets/MainContent/model/slice/mainContentSlice"
import { gameReducer } from "entities/Game/model/slice/gameSlice"

export function createReduxStore(
	initialState?: StateSchema,
) {
	const rootReducers: ReducersMapObject<StateSchema> = {
		[rtkApi.reducerPath]: rtkApi.reducer,
		gamesList: mainContentReducer,
		game: gameReducer
    }
    const store = configureStore({
        preloadedState: initialState,
        reducer: rootReducers,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(rtkApi.middleware)
	})

	return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"]