import React from "react"
import { Route, Routes, BrowserRouter } from "react-router-dom"

import { AuthOutlet } from "./outlets/auth"
import { InitOutlet } from "./outlets/init"
import { PrivateOutlet } from "./outlets/private"
import { Login } from "./pages/Login/Login"
import { HomePage } from "./pages/HomePage/HomePage"

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
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
} 