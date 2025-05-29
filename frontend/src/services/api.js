import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // You can add auth tokens here if needed
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      console.error('Unauthorized access');
    }
    return Promise.reject(error);
  }
);

export const QuoteService = {
  getAllQuotes: async () => {
    try {
      const response = await api.get('/api/quotes');
      return response.data;
    } catch (error) {
      console.error('Error fetching quotes:', error);
      throw error;
    }
  },

  getQuoteById: async (id) => {
    try {
      const response = await api.get(`/api/quotes/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching quote:', error);
      throw error;
    }
  },

  createQuote: async (quoteData) => {
    try {
      const response = await api.post('/api/quotes', quoteData);
      return response.data;
    } catch (error) {
      console.error('Error creating quote:', error);
      throw error;
    }
  },

  updateQuote: async (id, quoteData) => {
    try {
      const response = await api.put(`/api/quotes/${id}`, quoteData);
      return response.data;
    } catch (error) {
      console.error('Error updating quote:', error);
      throw error;
    }
  },

  deleteQuote: async (id) => {
    try {
      const response = await api.delete(`/api/quotes/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting quote:', error);
      throw error;
    }
  },
};

export default api; 