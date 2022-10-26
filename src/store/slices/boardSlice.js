import { createSlice } from "@reduxjs/toolkit"
import { createCards, fetchBoardData, createLists } from "../actions/boardAction"

const initialState = {
    fetchLists: false,
    error: {},
    lists: []
}

const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {},
    extraReducers: {
        [createCards.pending]: (state) => {
            state.error = {}
        },
        [createCards.fulfilled]: (state, { payload }) => {
            state.card = [...state.card, payload]
        },
        [createCards.rejected]: (state, {payload}) => {
            state.error = payload
        },
        [fetchBoardData.pending]: (state) => {
            state.fetchLists = true
        },
        [fetchBoardData.fulfilled]: (state, { payload }) => {
            state.fetchLists = false
            state.lists = payload.lists
        },
        [fetchBoardData.rejected]: (state) => {
            state.fetchLists = false
        },
        [createLists.pending]: (state) => {
            state.error = {}
        },
        [createLists.fulfilled]: (state, { payload }) => {
            state.lists = [...state.lists, payload]
        },
        [createLists.rejected]: (state, {payload}) => {
            state.error = payload
        }
    }
})

export default boardSlice.reducer;