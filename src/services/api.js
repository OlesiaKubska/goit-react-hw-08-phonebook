import axios from "axios";

export const API = axios.create({
    baseURL: 'https://connections-api.herokuapp.com',
});

// Інтерцептор для додавання JWT токена до заголовків запиту
API.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

const authAPI = {
    // Create a new user
    register: (userData) => API.post('/users/signup', userData),

    // Login user
    login: (credentials) => API.post('/users/login', credentials),

    // /users/logout
    logout: () => API.post('/users/logout'),

    // Get information about the current user
    getCurrentUser: () => API.get('/users/current'),
};

const contactsAPI = {
    // Get all user contacts
    getAllContacts: () => API.get('/contacts'),

    // Create a new contact
    addContact: (contactData) => API.post('/contacts', contactData),

    // Delete contact
    deleteContact: (contactId) => API.delete(`/contacts/${contactId}`),

    // /contacts/{contactId}
    updateContact: (contactId, updatedData) => API.patch(`/contacts/${contactId}`, updatedData),
};

export { authAPI, contactsAPI };