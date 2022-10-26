import { createSlice } from "@reduxjs/toolkit"

import { loadingBoards, createBoards } from "../actions/dashboardAction.js"

const initialState = {
    loadingBoard: false,
    error: {},
    list: []
}

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {},
    extraReducers: {
        [loadingBoards.pending]: (state) => {
            state.loadingBoard = true
        },
        [loadingBoards.fulfilled]: (state, { payload }) => {
            state.loadingBoard = false
            state.list = payload
        },
        [loadingBoards.rejected]: (state) => {
            state.loadingBoard = false
        },
        [createBoards.pending]: (state) => {
            state.error = {}
        },
        [createBoards.fulfilled]: (state, { payload }) => {
            state.list = [...state.list, payload]
        },
        [createBoards.rejected]: (state, {payload}) => {
            state.error = payload
        }
    }
})

export default dashboardSlice.reducer