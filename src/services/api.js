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
    register: (userData) => API.post('/users/signup', userData),

    // Login user
    login: (credentials) => API.post('/users/login', credentials),

    // /users/logout
    logout: () => API.post('/users/logout'),

    // Get information about the current user
    getCurrentUser: () => API.get('/users/current'),
};

export const contactsAPI = {
    // Get all user contacts
    getAllContacts: () => API.get('/contacts'),

    // Create a new contact
    addContact: (contactData) => API.post('/contacts', contactData),

    // Delete contact
    deleteContact: (contactId) => API.delete(`/contacts/${contactId}`),

    // /contacts/{contactId}
    updateContact: (contactId, updatedData) => API.patch(`/contacts/${contactId}`, updatedData),
};