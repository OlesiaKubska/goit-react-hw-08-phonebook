import { createAsyncThunk } from "@reduxjs/toolkit";
import { contactsAPI } from "services/api";

export const fetchContacts = createAsyncThunk(
    "contacts/getAll",
    async (_, thunkApi) => {
        try {
            const { data } = await contactsAPI.getAllContacts();
            // console.log(data);
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (data, { rejectWithValue }) => {
        try {
            const { data: result } = await contactsAPI.addContact(data);
            return result;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (id, { rejectWithValue }) => {
        try {
            await contactsAPI.deleteContact(id);
            return id;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);