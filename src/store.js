import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./features/login/userSlice"
import boardReducer from "./features/board/boardSlice"
import dashboardReducer from "./features/homePage/dashboardSlice"

export const store = configureStore({
    reducer: {
        user: userReducer,
        board: boardReducer,
        dashboard: dashboardReducer
    }
});