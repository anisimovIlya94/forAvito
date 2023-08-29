import { Dispatch } from "@reduxjs/toolkit";
import { PlatformField, SortField } from "../types/MainContentSchema";
import axios from "axios";
import { mainContentActions } from "../slice/mainContentSlice";
import { StateSchema } from "app/providers/StoreProvider";

export interface OptionsTypes {
    sort?: SortField
    platform?: PlatformField
    category?: string
}


export const fetchGamesList = () => async (dispatch: Dispatch, getState: () => StateSchema) => {
    const state = getState().gamesList
    const platform = state.platform === "all" ? null : state.platform
    const category = state.category === "all" ? null : state.category
    const setOptions = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
        params: {
          platform: platform,
          category: category,
          'sort-by': state.sort
        },
        headers: {
          'X-RapidAPI-Key': 'fd27cf3a59mshf640d6ca0cba13ep1101ebjsn10e07035b761',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
      };
      
    try {
        const {data} = await axios.request(setOptions);
        dispatch(mainContentActions.setData(data))
    } catch (error) {
        const err = String(error)
        dispatch(mainContentActions.setError(err) )
    }
}