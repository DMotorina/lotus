import { createAsyncThunk } from '@reduxjs/toolkit'
import { httpClient } from '../../utils/httpClient'

const config = {
    headers: {
        'Content-Type': 'application/json',
    },
}

export const loadingBoards = createAsyncThunk(
    'dashboard/loadingBoards',
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
    'dashboard/createBoards',
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