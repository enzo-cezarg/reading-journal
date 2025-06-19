import axios from "axios";

export const addBook = async (newBookData) => {
  try {
    const response = await axios.post(`http://localhost:5000/books`, newBookData);
    return response.data;
  } catch (error) {
    throw new Error(`Erro ao adicionar o livro: ${error.response?.status || error.message}`);
  }
};

export const deleteBook = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:5000/books/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Erro ao excluir o livro: ${error.response?.status || error.message}`);
  }
};

export const updateBook = async (updatedBookData) => {
  try {
    const response = await axios.put(`http://localhost:5000/books`, updatedBookData);
    return response.data;
  } catch (error) {
    throw new Error(`Erro ao excluir o livro: ${error.response?.status || error.message}`);
  }
};