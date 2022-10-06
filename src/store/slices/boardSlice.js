import { createSlice } from "@reduxjs/toolkit";
import { loadingBoards, createBoards } from "../actions/boardAction";

const initialState = {
    loadingBoard: false,
    error: {},
    list: []
}

const boardSlice = createSlice({
    name: 'board',
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
        [createBoards.pending]: (state, { payload }) => {
            state.error = {}
        },
        [createBoards.fulfilled]: (state, { payload }) => {
            state.list = [...state.list, payload]
        },
        [createBoards.rejected]: (state, {payload}) => {
            state.error = payload
        },
    }
})

export default boardSlice.reducer;