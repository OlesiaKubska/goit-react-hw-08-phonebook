import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout, getCurrentUser } from "./authOperations";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: { name: null, email: null },
        token: null,
        isAuthenticated: false,
        isLogin: false,
        error: null,
    },
    
    extraReducers: {
        [register.fulfilled] (state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLogin = true;
        },
        [login.fulfilled] (state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLogin = true;
        },    
        [logout.fulfilled] (state) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLogin = false;
        }, 
        [getCurrentUser.pending](state) {
            state.isAuthenticated = true;
        },
        [getCurrentUser.fulfilled] (state, action) {
            state.user = action.payload;
            state.isAuthenticated = false;
            state.isLogin = true;
        },
        [getCurrentUser.rejected] (state) {
            state.isAuthenticated = false;
        },
    },
});

export const authReducer = authSlice.reducer;