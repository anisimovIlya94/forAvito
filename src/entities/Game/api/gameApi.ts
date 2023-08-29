import { rtkApi } from "shared/api/rtkApi"
import { GameTypes } from "../model/types/game"

const gameApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getGame: build.query<GameTypes, string>({
			query: (id) => ({
                url: `/game`,
                headers: {
                    'X-RapidAPI-Key': 'fd27cf3a59mshf640d6ca0cba13ep1101ebjsn10e07035b761',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                },
                params: {
                    id,
                },
            }),
		}),
	})
})
  
export const useGame = gameApi.useGetGameQuery