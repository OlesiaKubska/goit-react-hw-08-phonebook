import { createAsyncThunk } from "@reduxjs/toolkit";
import { authAPI } from "services/api";

// Register
export const register = createAsyncThunk(
    'auth/register',
    async (userData, { rejectWithValue }) => {
        try {
        const { data } = await authAPI.register(userData);
        return data;
        } catch (error) {
        return rejectWithValue(error.message);
        }
    }
);

// Login
export const login = createAsyncThunk(
    'auth/login',
    async (credentials, { rejectWithValue }) => {
        try {
        const { data } = await authAPI.login(credentials);
        return data;
        } catch (error) {
        return rejectWithValue(error.message);
        }
    }
);

// Logout
export const logout = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
        try {
        await authAPI.logout();
        } catch (error) {
        return rejectWithValue(error.message);
        }
    }
);

// Get current user
export const getCurrentUser = createAsyncThunk(
    'auth/getCurrentUser',
    async (_, { rejectWithValue }) => {
        try {
        const { data } = await authAPI.getCurrentUser();
        return data;
        } catch (error) {
        return rejectWithValue(error.message);
        }
    }
);