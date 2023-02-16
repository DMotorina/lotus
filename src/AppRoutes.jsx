import React from "react"
import { Route, Routes, BrowserRouter } from "react-router-dom"

import { AuthOutlet } from "./shared/outlets/auth"
import { InitOutlet } from "./shared/outlets/init"
import { PrivateOutlet } from "./shared/outlets//private"
import { Login } from "./features/login/Login"
import { Home } from "./features/home/Home"
import { Board } from "./features/board/Board"

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<InitOutlet />} >
                    <Route element={<AuthOutlet />} >
                        <Route path="/login" element={<Login />} />
                    </Route>
                    <Route element={<PrivateOutlet />} >
                        <Route path="/" element={<Home />} />
                        <Route path="/board/:boardSlug" element={<Board />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
} 