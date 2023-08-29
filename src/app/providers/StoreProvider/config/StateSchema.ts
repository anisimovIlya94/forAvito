import { rtkApi } from "shared/api/rtkApi";
import { MainContentSchema } from "widgets/MainContent/model/types/MainContentSchema";

export interface StateSchema {
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>,
    gamesList: MainContentSchema
 }