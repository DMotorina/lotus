import { createSlice } from "@reduxjs/toolkit"
import { createCard, fetchBoardData, createList } from "../actions/boardAction"

const initialState = {
    fetchLists: false,
    error: {},
    lists: [],
    cards: []
}

const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        runDasha: (state, {payload}) => {
            // EXAMPLE:
            // state.lists = [state.lists[2], state.lists[0], state.lists[1]]
        }
    },
    extraReducers: {
        [createCard.pending]: (state) => {
            state.error = {}
        },
        [createCard.fulfilled]: (state, { payload }) => {
            state.cards = [...state.cards, payload]
        },
        [createCard.rejected]: (state, {payload}) => {
            state.error = payload
        },
        [fetchBoardData.pending]: (state) => {
            state.fetchLists = true
            state.fetchCards = true
        },
        [fetchBoardData.fulfilled]: (state, { payload }) => {
            const { lists, cards } = payload
            
            state.fetchLists = false
            state.fetchCards = false

            state.lists = lists.map(list => ({
                ...list, 
                cards: cards.filter((card) => card.list === list.slug)  
            }))
        },
        [fetchBoardData.rejected]: (state) => {
            state.fetchLists = false
            state.fetchCards = false
        },
        [createList.pending]: (state) => {
            state.error = {}
        },
        [createList.fulfilled]: (state, { payload }) => {
            state.lists = [...state.lists, {...payload, cards: []}]
        },
        [createList.rejected]: (state, {payload}) => {
            state.error = payload
        }
    }
})

export const { runDasha } = boardSlice.actions
export default boardSlice.reducer