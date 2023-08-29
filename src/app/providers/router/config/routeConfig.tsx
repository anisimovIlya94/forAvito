import { GamePage } from "pages/GamePage";
import { MainPage } from "pages/MainPage";
import { RouteProps } from "react-router-dom";
import { AppRoutes, getRouteGame, getRouteMain } from "shared/const/router";

export const routerConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage/>
    },
    [AppRoutes.GAME]: {
        path: getRouteGame(":id"),
        element: <GamePage/>
    }
}