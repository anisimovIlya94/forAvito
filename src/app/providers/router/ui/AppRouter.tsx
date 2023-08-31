import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { routerConfig } from "../config/routeConfig"
import { Spin } from "antd"

export const AppRouter = () => {
	return (
		<Suspense fallback={
			<div className="suspense-wrapper">
				<Spin style={{color: "white"}} tip="Loading..." size="large">
					<div className="content" />
				</Spin>
			</div>
		}
		>
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