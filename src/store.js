import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./features/login/slice"
import boardReducer from "./features/board/slice"
import dashboardReducer from "./features/home/slice"

export const store = configureStore({
    reducer: {
        user: userReducer,
        board: boardReducer,
        dashboard: dashboardReducer
    }
});