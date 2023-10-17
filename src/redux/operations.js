import { createAsyncThunk } from "@reduxjs/toolkit";
import { contactsAPI } from "services/api";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkApi) => {
        try {
            const { data } = await contactsAPI.getAllContacts();
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (contact, thunkApi) => {
        try {
            const { data } = await contactsAPI.addContact(contact);
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (id, thunkApi) => {
        try {
            const { data } = await contactsAPI.deleteContact(id);
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);