import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./slices/userSlice"
import boardReducer from "./slices/boardSlice"
import dashboardReducer from "./slices/dashboardSlice"

export const store = configureStore({
    reducer: {
        user: userReducer,
        board: boardReducer,
        dashboard: dashboardReducer
    }
});