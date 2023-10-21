import { combineReducers } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from "./contactsSlice";
import filterReducer from "./filterSlice";
import { authReducer } from './authSlice';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['token'],
};

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
    auth:  persistReducer(persistConfig, authReducer),
});

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

let persistor = persistStore(store)
// console.log(store.getState());

export { store, persistor };