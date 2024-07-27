// src/services/api.js
import axios from 'axios';
const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getAllItems = async (enpoint) => {
  console.log("enpoint",enpoint)
  try {
    const response = await api.get(enpoint);
    return response.data;
  } catch (error) {
    console.error('Error fetching items:', error);
    return error;
  }
};

export const updateItem = async (enpoint, id, item) => {
  try {
    const response = await api.put(`${enpoint}/${id}`, item);
    return response.data;
  } catch (error) {
    console.error(`Error updating item with id ${id}:`, error);
    return error;


  }
};

export const deleteItem = async (enpoint, id) => {
  try {
    const response = await api.delete(`${enpoint}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting item with id ${id}:`, error);
    return error;
  }
};

export const createItem = async (endpoint,item) => {
  try {
    const response = await api.post(endpoint, item);
    return response.data;
  } catch (error) {
    console.error('Error creating item:', error);
    return error;
  }
};

export const getItemById = async (id) => {
  try {
    const response = await api.get(`/items/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching item with id ${id}:`, error);
    throw error;
  }
};






