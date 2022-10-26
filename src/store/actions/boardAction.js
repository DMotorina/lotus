import { createAsyncThunk } from '@reduxjs/toolkit'
import { httpClient } from '../../utils/httpClient'

const config = {
    headers: {
        'Content-Type': 'application/json',
    },
}

export const loadingBoards = createAsyncThunk(
    'board/loadingBoards',
    async (_, {rejectWithValue}) => {
        try {
            const resonse = await httpClient.get(
                '/api/boards/',
                config
            )
            return resonse.data
        } catch (error) {
            return rejectWithValue()
        }
    }
)

export const createBoards = createAsyncThunk(
    'board/createBoards',
    async ({name}, {rejectWithValue}) => {
        // Custom validation can be added there. Example:
        if (!name.length) {
            return rejectWithValue({name: "Name shouldn't be empty"})
        }

        try {
            const resonse = await httpClient.post(
                '/api/boards/',
                {name},
                config
            )
            return resonse.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

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
            '/api/cards/', // TODO: board filter
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

        const newLists = lists.map(list => ({
            ...list, 
            cards: cards.filter((card) => card.list === list.slug)
        }))

        return {
            // + board info
            lists: newLists
        }
    }
)

// export const loadingCards = createAsyncThunk(
//     'board/loadingCards',
//     async (_, {rejectWithValue}) => {
//         try {
//             const resonse = await httpClient.get(
//                 '/api/cards/',
//                 config
//             )
//             return resonse.data
//         } catch (error) {
//             return rejectWithValue()
//         }
//     }
// )

export const createCards = createAsyncThunk(
    'board/createCards',
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

// export const loadingLists = createAsyncThunk(
//     'board/loadingLists',
//     async (_, {rejectWithValue}) => {
//         try {
//             const resonse = await httpClient.get(
//                 '/api/lists/',
//                 config
//             )
//             return resonse.data
//         } catch (error) {
//             return rejectWithValue()
//         }
//     }
// )

export const createLists = createAsyncThunk(
    'board/createLists',
    async ({slug, name, board}, {rejectWithValue}) => {

        try {
            const resonse = await httpClient.post(
                '/api/lists/',
                {slug, name, board},
                config
            )
            return resonse.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)