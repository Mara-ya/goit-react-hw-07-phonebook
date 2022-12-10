import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteContact, getContacts, postContacts } from "services/mockapi";

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, {rejectWithValue}) => {
        try {
            const response = await getContacts();
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (data, {rejectWithValue}) => {
        try {
            const response = await postContacts(data);
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
    );
    
    export const removeContact = createAsyncThunk(
        'contacts/deleteContact',
        async (id , {rejectWithValue}) => {
            try {
                const response = await deleteContact(id);
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);