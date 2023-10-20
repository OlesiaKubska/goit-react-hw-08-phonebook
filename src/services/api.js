import axios from "axios";

export const API = axios.create({
    baseURL: 'https://connections-api.herokuapp.com',
});

// Utility to add JWT
export const setAuthHeader = token => {
    API.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
export const clearAuthHeader = () => {
    API.defaults.headers.common.Authorization = '';
};


export const authAPI = {
    // Create a new user
    register: async (credentials) => {
        try {
            const result = await API.post('/users/signup', credentials);
            setAuthHeader(result.data.token);
            return result;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    // Login user
    login: async (credentials) => {
        try {
            const result = await API.post('/users/login', credentials);
            setAuthHeader(result.data.token);
            return result;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    // /users/logout
    logout: async () => {
        try {
            const result = await API.post('/users/logout');
            clearAuthHeader();
            return result;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    // Get information about the current user
    getCurrentUser: async () => {
        try {
            const result = await API.get('/users/current');
            return result;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
};

export const contactsAPI = {
    // Get all user contacts
    getAllContacts: async () => {
        try {
            const result = await API.get('/contacts');
            return result;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    // Create a new contact
    addContact: async (contactData) => {
        try {
            const result = await API.post('/contacts', contactData);
            return result;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    // Delete contact
    deleteContact: async (contactId) => {
        try {
            const result = await API.delete(`/contacts/${contactId}`);
            return result;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    // /contacts/{contactId}
    updateContact: async (contactId, updatedData) => {
        try {
            const result = await API.patch(`/contacts/${contactId}`, updatedData);
            return result;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
};