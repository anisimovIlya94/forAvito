export enum AppRoutes {
    "MAIN" = "main",
    "GAME" = "game"
}

export const getRouteMain = () => "/"
export const getRouteGame = (id: string) => `/game/${id}`