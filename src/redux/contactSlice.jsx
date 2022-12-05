import { createSlice } from "@reduxjs/toolkit";
import initialContacts from "../components/contacts.json"

export const phonebookSlice = createSlice({
    name: 'phonebook',
    initialState: {
        contacts: initialContacts,
        filter: '',
    },

    reducers: {
        addContact(state, action){
            state.contacts.push(action.payload);
        },

        removedContact(state, action){
            const newContacts = state.contacts.filter(contact => contact.id !== action.payload);
            state.contacts = newContacts;
        },

        addFilter(state, action){
            state.filter = action.payload; 
        }
    }
})

export const {addContact, removedContact, addFilter} = phonebookSlice.actions;
export const contactsReducer = phonebookSlice.reducer;