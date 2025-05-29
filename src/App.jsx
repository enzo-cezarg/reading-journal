import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import About from './components/About/About'
import BookList from './components/BookList/BookList'
import BookForm from './components/BookForm/BookForm'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {

  const routes = [
    { path: '/', element: <Home />, label: 'Página Inicial' },
    { path: '/sobre', element: <About />, label: 'Sobre' },
    { path: '/book-list', element: <BookList />, label: 'Lista de Livros' },
    { path: '/book-form', element: <BookForm />, label: 'Cadastrar' },
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