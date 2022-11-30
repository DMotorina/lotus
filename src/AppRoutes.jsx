import React from "react"
import { Route, Routes, BrowserRouter } from "react-router-dom"

import { AuthOutlet } from "../src/features/outlets/auth"
import { InitOutlet } from "../src/features/outlets/init"
import { PrivateOutlet } from "../src/features/outlets/private"
import { Login } from "./features/Login/Login"
import { HomePage } from "./features/HomePage/HomePage"
import { BoardPage } from "./features/Board/BoardPage"

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<InitOutlet />} >
                    <Route element={<AuthOutlet />} >
                        <Route path="/login" element={<Login />} />
                    </Route>
                    <Route element={<PrivateOutlet />} >
                        <Route path="/" element={<HomePage />} />
                        <Route path="/board/:boardSlug" element={<BoardPage />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
} 