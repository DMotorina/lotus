import { createSlice } from "@reduxjs/toolkit";
import { loadingBoards, createBoards, createCards, fetchBoardData, createLists } from "../actions/boardAction";

const initialState = {
    loadingBoard: false,
    fetchCards: false,
    fetchLists: false,
    error: {},
    list: [],
    card: [],
    lists: []
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
        [createBoards.pending]: (state) => {
            state.error = {}
        },
        [createBoards.fulfilled]: (state, { payload }) => {
            state.list = [...state.list, payload]
        },
        [createBoards.rejected]: (state, {payload}) => {
            state.error = payload
        },
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
            // console.log("--payload", payload)  
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