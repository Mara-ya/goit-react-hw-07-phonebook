import { createSlice } from "@reduxjs/toolkit";
import { addContact, fetchContacts, removeContact } from "./operations";

export const phonebookSlice = createSlice({
    name: 'phonebook',
    initialState: {
        contacts: {
            items: [],
            isLoading: false,
            error: null
        },
        filter: ""
    },

    extraReducers: {
        [fetchContacts.pending]: 
        state => {state.contacts.isLoading = true},
        [fetchContacts.fulfilled]: (state, action) => {
            state.contacts.isLoading = false;
            state.contacts.items = action.payload;
        },
        [fetchContacts.rejected]: (state, action) => {
            state.contacts.isLoading = false;
            state.contacts.error = action.payload;
        },

        [addContact.pending]: state => {
            state.contacts.isLoading = true;
        },
        [addContact.fulfilled]: (state, action) => {
            state.contacts.isLoading = false;
            state.contacts.items.push(action.payload);
        },
        [addContact.rejected]: (state, action) => {
            state.contacts.isLoading = false;
            state.contacts.error = action.payload;
        },

        [removeContact.pending]: state => {
            state.contacts.isLoading = true;
        },
        [removeContact.fulfilled]: (state, action) => {
            state.contacts.isLoading = false;
            const idx = state.contacts.items.findIndex(item => item.id === action.payload.id);
            state.contacts.items.splice(idx, 1);
        },
        [removeContact.rejected]: (state, action) => {
            state.contacts.isLoading = false;
            state.contacts.error = action.payload;
        },
    }
})

export const contactsReducer = phonebookSlice.reducer;