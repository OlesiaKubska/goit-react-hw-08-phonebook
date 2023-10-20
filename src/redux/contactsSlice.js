import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [{ "id": 1, "name": "Rosie Simpson", "number": "459-12-56" },
            { "id": 2, "name": "Hermione Kline", "number": "443-89-12" },
            { "id": 3, "name": "Eden Clements", "number": "645-17-79" },
            { "id": 4, "name": "Annie Copeland", "number": "227-91-26" }],
        isLoading: false,
        error: null,
    },

    extraReducers: {
        [fetchContacts.pending](state) {
            state.isLoading = true;
        },
        [fetchContacts.fulfilled](state, action) {
            state.items = action.payload;
            state.isLoading = false;
        },
        [fetchContacts.rejected] (state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },

        [addContact.pending](state) {
            state.isLoading = true;
        },
        [addContact.fulfilled] (state, action) {
            // console.log(action.payload);
            state.items.push(action.payload);
            state.isLoading = false;
        },
        [addContact.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
            
        [deleteContact.pending](state) {
            state.isLoading = true;
        },
        [deleteContact.fulfilled] (state, action) {
            state.items = state.items.filter((contact) => contact.id !== action.payload.id);
            state.isLoading = false;
        },
        [deleteContact.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const contactsReducer = contactsSlice.reducer;