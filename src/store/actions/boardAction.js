import { createAsyncThunk } from '@reduxjs/toolkit'
import { httpClient } from '../../utils/httpClient'

const config = {
    headers: {
        'Content-Type': 'application/json',
    },
}

export const loadingBoards = createAsyncThunk(
    'user/loadingBoards',
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
    'user/createBoards',
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

export const loadingCards = createAsyncThunk(
    'user/loadingCards',
    async (_, {rejectWithValue}) => {
        try {
            const resonse = await httpClient.get(
                '/api/cards/',
                config
            )
            return resonse.data
        } catch (error) {
            return rejectWithValue()
        }
    }
)

export const createCards = createAsyncThunk(
    'user/createCards',
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

export const loadingLists = createAsyncThunk(
    'user/loadingLists',
    async (_, {rejectWithValue}) => {
        try {
            const resonse = await httpClient.get(
                '/api/lists/',
                config
            )
            return resonse.data
        } catch (error) {
            return rejectWithValue()
        }
    }
)

export const createLists = createAsyncThunk(
    'user/createLists',
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