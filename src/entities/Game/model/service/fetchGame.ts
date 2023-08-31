import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { StateSchema } from "app/providers/StoreProvider";
import { gameActions } from "../slice/gameSlice";


export const fetchGame = (id: string) => async (dispatch: Dispatch, getState: () => StateSchema) => {
    const setOptions = {
        method: 'GET',
        url: `https://free-to-play-games-database.p.rapidapi.com/api/game`,
        headers: {
          'X-RapidAPI-Key': 'fd27cf3a59mshf640d6ca0cba13ep1101ebjsn10e07035b761',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        },
        params: {
            id
        }
      };
      dispatch(gameActions.setIsLoading(true))
  try {
      const { data } = await axios.request(setOptions);
      dispatch(gameActions.setData(data))
      dispatch(gameActions.setIsLoading(false))
      return data
    } catch (error) {
        const err = String(error)
    dispatch(gameActions.setError(err))
    dispatch(gameActions.setIsLoading(false))
    }
}