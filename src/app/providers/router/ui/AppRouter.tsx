import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { routerConfig } from "../config/routeConfig"

export const AppRouter = () => {
	return (
		<Suspense fallback="loading...">
			<Routes>
				{Object.values(routerConfig).map(({element, path}) => {
					return <Route
						key={path}
						path={path}
						element={element}
					/>
				})}
			</Routes>
		</Suspense>
	)
}