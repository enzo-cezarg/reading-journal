import axios from "axios";
import { addBook, deleteBook, updateBook } from "../src/api/bookService.js";


jest.mock('axios');

describe('addBook', () => {
  it('deve criar um novo livro e retornar os dados criados', async () => {
    const mockBookData = {
      title: 'Dom Casmurro',
      author: 'Machado de Assis',
      genre: 'Literatura Clássica',
      date: '2023-12-05',
    };

    const mockResponseData = { id: 1, ...mockBookData };

    axios.post.mockResolvedValueOnce({ data: mockResponseData });

    const result = await addBook(mockBookData);

    expect(axios.post).toHaveBeenCalledWith('http://localhost:5000/books', mockBookData);
    expect(result).toEqual(mockResponseData);
  });
});

describe('deleteBook', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('deve chamar a API para deletar um livro com o ID correto e retornar a mensagem de sucesso', async () => {
    const bookIdToDelete = 1;
    const mockResponseData = { "message": "Book removed successfully" };

    axios.delete.mockResolvedValueOnce({ data: mockResponseData, status: 200 });

    const result = await deleteBook(bookIdToDelete); 

    expect(axios.delete).toHaveBeenCalledWith(`http://localhost:5000/books/${bookIdToDelete}`);

    expect(result).toEqual(mockResponseData);
  });
});