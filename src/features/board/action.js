import { createAsyncThunk } from '@reduxjs/toolkit'
import { httpClient } from '../../shared/utils/httpClient'

const config = {
    headers: {
        'Content-Type': 'application/json',
    },
}

const fetchLists = async (boardSlug) => {
    try {
        const resonse = await httpClient.get(
            `/api/lists/?board=${boardSlug}`,
            config
        )
        return resonse.data
    } catch (error) {
        return []
    }
}

const fetchCards = async (boardSlug) => {
    try {
        const resonse = await httpClient.get(
            `/api/cards/?board=${boardSlug}`,
            config
        )
        return resonse.data
    } catch (error) {
        return []
    }
}

export const fetchBoardData = createAsyncThunk(
    'board/fetchBoardData',
    async ({boardSlug}, {rejectWithValue}) => {
        // load board there
        const lists = await fetchLists(boardSlug)
        const cards = await fetchCards(boardSlug)

        // const newLists = lists.map(list => ({
        //     ...list, 
        //     cards: cards.filter((card) => card.list === list.slug)
        // }))

        return {lists, cards}
    }
)

export const createCard = createAsyncThunk(
    'board/createCard',
    async ({name, description, list}, {rejectWithValue}) => {
        try {
            const resonse = await httpClient.post(
                '/api/cards/',
                {name, description, list},
                config
            )
            return resonse.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const createList = createAsyncThunk(
    'board/createList',
    async ({slug, name, board}, {rejectWithValue}) => {
        try {
            const response = await httpClient.post(
                '/api/lists/',
                {slug, name, board},
                config
            )
            // console.log("--response", response.data, Array.isArray(response.data))
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)