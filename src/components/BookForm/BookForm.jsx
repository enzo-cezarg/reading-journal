import React, { useState } from 'react';

function BookForm({ onFormSubmit }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('Romance');
  const [date, setDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim()) {
      alert('Por favor, insira um título.');
      return;
    }

    onFormSubmit({ title, author, genre, date });
    console.log('Dados enviados do BookForm:', { title, author, genre, date });
    setTitle('');
    setAuthor('');
    setGenre('Romance');
    setDate('');
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">Cadastrar</h1>
      <form className='m-8 w-64 sm:w-96' onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Título:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">
            Autor:
          </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="mt-1 block w-full px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="genre" className="block text-sm font-medium text-gray-700 mb-1">
            Gênero:
          </label>
          <select
            type="select"
            name="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="mt-1 block w-full px-3 py-2"
            required
          >
						<option value="Romance">Romance</option>
						<option value="Suspense">Suspense</option>
						<option value="Fantasia">Fantasia</option>
						<option value="Ficção Científica">Ficção Científica</option>
						<option value="Mistério">Mistério</option>
						<option value="Terror">Terror</option>
						<option value="Biografia">Biografia</option>
						<option value="Aventura">Aventura</option>
						<option value="Outros">Outros</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
            Data:
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1 block w-full px-3 py-2"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 bg-gray-300"
        >
          Cadastrar Livro
        </button>
      </form>
    </div>
  );
}

export default BookForm;