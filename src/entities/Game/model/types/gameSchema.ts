import { GameTypes } from "./game";

export interface GameSchema {
    isLoading: boolean,
    error: string | undefined
    data: GameTypes | null
    time: number
}