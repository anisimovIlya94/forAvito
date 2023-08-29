import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const rtkApi = createApi({
	reducerPath: "rtkApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://free-to-play-games-database.p.rapidapi.com/api"
	}),
	endpoints: (builder) => ({}),
})