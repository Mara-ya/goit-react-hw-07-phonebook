import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const phonebookPersistConfig = {
    key: "phonebook",
    storage,
    blacklist: ['filter'],
};

const persistedContactsReducer = persistReducer(phonebookPersistConfig, contactsReducer);

export const store = configureStore({
    reducer: {
        phonebook: persistedContactsReducer,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    })
})

export const persistor = persistStore(store);
