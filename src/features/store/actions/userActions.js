import { createAsyncThunk } from '@reduxjs/toolkit'
import { httpClient } from '../../utils/httpClient'

const config = {
    headers: {
        'Content-Type': 'application/json',
    },
}

export const login = createAsyncThunk(
    'user/login',
    async ({ email, password }, {rejectWithValue}) => {
        try {
            const resonse = await httpClient.post(
                '/api/auth/login/',
                { email, password },
                config
            )
            return resonse.data
        } catch (error) {
            return rejectWithValue(error.response.data["non_field_errors"][0])
        }
    }
  )

export const checkAuth = createAsyncThunk(
    'user/checkAuth', 
    async(_, {rejectWithValue}) => {
        try {
            const resonse = await httpClient.get(
                '/api/users/me/',
                config
            )
            return resonse.data
        } catch (error) {
            return rejectWithValue()
        }
    }
)

export const logout = createAsyncThunk(
    'user/logout', 
    async(_, {rejectWithValue}) => {
        try {
            await httpClient.post(
                '/api/auth/logout/',
                config
            )
        } catch {}
        return null
    }
)