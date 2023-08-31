import { GameCardTypes } from "entities/GameCard"

export interface MainContentSchema {
	isLoading: boolean,
	error: string | undefined,
	page: number,
	hasMore: boolean,
	limit: number,
	category: string,
	sort: SortField,
	platform: PlatformField,
	data: GameCardTypes[] | null,
	dataList: GameCardTypes[] | null
}

export type SortField = "release - date" | "popularity" | "alphabetical" | "relevance"

export type PlatformField = "all" | "pc" | "browser"