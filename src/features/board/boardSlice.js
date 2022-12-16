import { createSlice } from "@reduxjs/toolkit"
import { createCard, fetchBoardData, createList } from "./boardAction"

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
        dragToList: (state, { payload: {fromIndex, toIndex} }) => {
            if(fromIndex === toIndex) return
            const [movedItem] = state.lists.splice(fromIndex, 1)
            state.lists.splice(toIndex, 0, movedItem)
        },
        dragToCard: (state, { payload: {fromIndex, toIndex, fromList, toList} }) => {
            console.log({fromIndex, toIndex, fromList, toList})
            // if(fromIndex === toIndex) return
            const [movedCard] = state.lists[Number(fromList)].cards.splice(fromIndex, 1)
            state.lists[Number(fromList)].cards.splice(toIndex, 0, movedCard)
        }
    },
    extraReducers: {
        [createCard.pending]: (state) => {
            state.error = {}
        },
        [createCard.fulfilled]: (state, { payload, boardSlug }) => {
            state.lists = [...state.lists, payload]
            console.log("state.lists", state.lists.cards)
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

export const { dragToList, dragToCard } = boardSlice.actions
export default boardSlice.reducer