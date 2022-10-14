import { createSlice } from "@reduxjs/toolkit";
import { loadingBoards, createBoards, loadingCards, createCards, loadingLists, createLists } from "../actions/boardAction";

const initialState = {
    loadingBoard: false,
    loadingCards: false,
    loadingLists: false,
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
        [loadingCards.pending]: (state) => {
            state.loadingCards = true
        },
        [loadingCards.fulfilled]: (state, { payload }) => {
            state.loadingCards = false
            state.card = payload
        },
        [loadingCards.rejected]: (state) => {
            state.loadingCards = false
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
        [loadingLists.pending]: (state) => {
            state.loadingLists = true
        },
        [loadingLists.fulfilled]: (state, { payload }) => {
            state.loadingLists = false
            state.lists = payload
        },
        [loadingLists.rejected]: (state) => {
            state.loadingLists = false
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