import { createSelector } from "@reduxjs/toolkit";

// auth
export const selectToken = state => state.auth.token;
export const selectIsLogin = state => state.auth.isLogin;
export const selectUser = state => state.auth.user;
export const selectIsAuthenticated = state => state.auth.isAuthenticated;

// contacts
export const selectAllContacts = ({ contacts }) => contacts.items;
export const selectFilter = ({ filter }) => filter;
export const selectIsLoading = ({ contacts }) => contacts.isLoading;
export const selectError = ({ contacts }) => contacts.error;

export const selectFilteredContacts = createSelector(
    [selectAllContacts, selectFilter],
    (contacts, filter) => {
        if (!filter) {
            return contacts;
        }
        const normalizedFilter = filter.toLowerCase();
        const filteredContacts = contacts.filter(
            ({ name, number }) =>
                name.toLowerCase().trim().includes(normalizedFilter) ||
                number.trim().includes(normalizedFilter)
        );
        return filteredContacts;
    }
);