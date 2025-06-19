import React, { useState } from "react";

function BookForm({ onFormSubmit, label }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("Autoajuda");
  const [readAt, setReadAt] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim()) {
      alert("Por favor, insira um título.");
      return;
    }

    onFormSubmit({ title, author, genre, readAt });
    console.log("Dados enviados do BookForm:", { title, author, genre, readAt });
    setTitle("");
    setAuthor("");
    setGenre("Autoajuda");
    setReadAt("");
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">Cadastrar</h1>
      <form className="m-8 w-64 sm:w-96 bg-white p-8 shadow-lg rounded-md" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Título:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="author"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Autor:
          </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="genre"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Gênero:
          </label>
          <select
            type="select"
            name="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          >
            <option value="Autoajuda">Autoajuda</option>
            <option value="Thriller Psicológico">Thriller Psicológico</option>
            <option value="Romance">Romance</option>
            <option value="Distopia">Distopia</option>
            <option value="Memórias">Memórias</option>
            <option value="Ficção Histórica">Ficção Histórica</option>
            <option value="Ficção Literária">Ficção Literária</option>
            <option value="Fantasia">Fantasia</option>
            <option value="Literatura Clássica">Literatura Clássica</option>
            <option value="Ficção Filosófica">Ficção Filosófica</option>
            <option value="Literatura Modernista">Literatura Modernista</option>
            <option value="Romance Naturalista">Romance Naturalista</option>
          </select>
        </div>
        <div className="mb-10">
          <label
            htmlFor="readAt"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Data:
          </label>
          <input
            type="date"
            id="readAt"
            value={readAt}
            onChange={(e) => setReadAt(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 bg-indigo-700 text-white font-bold rounded hover:bg-indigo-800 transition duration-100"
        >
          {label}
        </button>
      </form>
    </div>
  );
}

export default BookForm;
