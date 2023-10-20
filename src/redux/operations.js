import { createAsyncThunk } from "@reduxjs/toolkit";
import { contactsAPI } from "services/api";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkApi) => {
        try {
            const res = await contactsAPI.getAllContacts();
            // console.log(res);
            return res.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (data, thunkAPI) => {
        try {
            const response = await contactsAPI.addContact(data);
            // console.log(data);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (id, thunkAPI) => {
        try {
            const response = await contactsAPI.deleteContact(id);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);