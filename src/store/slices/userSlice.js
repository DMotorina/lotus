import { createSlice } from "@reduxjs/toolkit";
import { login, checkAuth, logout } from "../actions/userActions"

const initialState = {
    isAuthChecked: false,
    loginLoading: false,
    boards: null,
    error: null,
    data: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        [login.pending]: (state) => {
            state.loginLoading = true
            state.error = null
        },
        [login.fulfilled]: (state, { payload }) => {
            state.loginLoading = false
            state.data = payload
        },
        [login.rejected]: (state, { payload }) => {
            state.loginLoading = false
            state.error = payload
        },
        [checkAuth.fulfilled]: (state, { payload }) => {
            state.isAuthChecked = true
            state.data = payload
        },
        [checkAuth.rejected]: (state) => {
            state.isAuthChecked = true
        },
        [logout.pending]: (state) => {
            state.data = null
        },
    }    
})

export const {setUser, removeUser} = userSlice.actions;

export default userSlice.reducer;