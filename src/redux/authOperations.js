import { createAsyncThunk } from "@reduxjs/toolkit";
import { authAPI } from "services/api";

// Register
export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
        try {
            const res = await authAPI.register(credentials);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

// Login
export const login = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
        try {
            const res = await authAPI.login(credentials);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

// Logout
export const logout = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        try {
            await authAPI.logout();
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

// Get current user
export const getCurrentUser = createAsyncThunk(
    'auth/getCurrent',
    async (_, thunkAPI) => {
        // Reading the token from the state via getState()
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
      // If there is no token, exit without performing any request
        return thunkAPI.rejectWithValue('Unable to fetch user');
        }

        try {
            const res = await authAPI.getCurrentUser();
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);