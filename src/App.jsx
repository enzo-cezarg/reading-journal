import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import BookList from "./components/BookList/BookList";
import BookForm from "./components/BookForm/BookForm";

import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { addBook, updateBook, deleteBook } from "./api/bookService.js";

function App() {
  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/books');
        setBooks(response.data);
      } catch (err) {
        console.error('Erro ao buscar livros:', err);
      }
    };

    fetchBooks();
  }, []);

  const handleAddBook = async (newBookData) => {
    try {
      const createdBook = await addBook(newBookData);
      setBooks((prevBooks) => [...prevBooks, createdBook]);
    } catch (error) {
      alert(`Erro ao atualizar o livro: ${error.response?.status || error.message}`);
    }
  };

  const handleDeleteBook = async (id) => {
    try {
      await deleteBook(id);
      setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
    } catch (error) {
      alert(`Erro ao atualizar o livro: ${error.response?.status || error.message}`);
    }
  };

  const handleUpdateBook = async (updatedBookData) => {
    try {
      const updatedBook = await updateBook(updatedBookData);
      setBooks((prevBooks) =>
        prevBooks.map((book) =>
          book.id === updatedBook.id ? updatedBook : book,
        ),
      );
    } catch (error) {
      alert(`Erro ao atualizar o livro: ${error.response?.status || error.message}`);
    }
  };

  const routes = [
    { path: "/", element: <Home />, label: "Início" },
    { path: "/sobre", element: <About />, label: "Sobre" },
    {
      path: "/book-list",
      element: (
        <BookList
          books={books}
          onDelete={handleDeleteBook}
          onUpdate={handleUpdateBook}
        />
      ),
      label: "Lista de Livros",
    },
    {
      path: "/book-form",
      element: <BookForm onFormSubmit={handleAddBook} label={"Cadastrar"} />,
      label: "Cadastrar",
    },
  ];

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <NavBar navLinks={routes} />
        <main className="flex-grow px-4 pt-32 bg-gradient-to-br from-sky-50 via-purple-50 to-blue-50">
          <Routes>
            {routes.map((rota) => (
              <Route key={rota.path} path={rota.path} element={rota.element} />
            ))}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
