import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import About from './components/About/About'
import BookList from './components/BookList/BookList'
import BookForm from './components/BookForm/BookForm'
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {

  const [books, setBooks] = useState([
    {id: 1, title: 'Crime e Castigo', author: 'Fiódor Dostoiévski', genre: 'Romance', date: '2025-05-29'}
  ])

  const handleAddBook = (newBookData) => {
    console.log('Função handleAddBook chamada no App.jsx com: ', newBookData)
		newBookData = {id: books.at(books.length-1).id + 1, ...newBookData}
    setBooks([...books, newBookData])
  }

  const routes = [
    { path: '/', element: <Home />, label: 'Página Inicial' },
    { path: '/sobre', element: <About />, label: 'Sobre' },
    { path: '/book-list', element: <BookList books={books}/>, label: 'Lista de Livros' },
    { path: '/book-form', element: <BookForm onFormSubmit={handleAddBook}/>, label: 'Cadastrar' },
  ]

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        
        <NavBar navLinks={routes} />
        <main className="flex-grow p-4">
          <Routes>
            {routes.map(rota => (
              <Route key={rota.path} path={rota.path} element={rota.element} />
            ))}
          </Routes>
        </main>

      </div>
    </Router>
  )
}

export default App