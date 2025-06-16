import { useState, useEffect } from "react";

function BookList({ books, onDelete, onUpdate }) {
  const [formVisible, setFormVisible] = useState(false);
  const [currentEditingBook, setCurrentEditingBook] = useState(null);

  const [formData, setFormData] = useState({
    id: "",
    title: "",
    author: "",
    genre: "Romance",
    date: "",
  });

  useEffect(() => {
    if (currentEditingBook) {
      setFormData({
        id: currentEditingBook.id || "",
        title: currentEditingBook.title || "",
        author: currentEditingBook.author || "",
        genre: currentEditingBook.genre || "Romance",
        date: currentEditingBook.date || "",
      });
      setFormVisible(true);
    } else {
      setFormData({
        id: "",
        title: "",
        author: "",
        genre: "Romance",
        date: "",
      });
    }
  }, [currentEditingBook]);

  const handleStartEdit = (book) => {
    setCurrentEditingBook(book);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmitUpdate = (event) => {
    event.preventDefault();
    if (onUpdate) {
      onUpdate(formData);
    }
    setFormVisible(false);
    setCurrentEditingBook(null);
  };

  const handleCancelEdit = () => {
    setFormVisible(false);
    setCurrentEditingBook(null);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">Lista de Livros</h1>

      <div className={formVisible ? "" : "hidden"}>
        <form
          onSubmit={handleSubmitUpdate}
          className="m-8 w-64 sm:w-96 border-2 border-black rounded-lg p-6"
        >
          <div className="mb-4 hidden">
            <label
              htmlFor="form-id"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              ID:
            </label>
            <input
              type="text"
              id="form-id"
              name="id"
              value={formData.id}
              readOnly
              className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="form-title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Título:
            </label>
            <input
              type="text"
              id="form-title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="form-author"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Autor:
            </label>
            <input
              type="text"
              id="form-author"
              name="author"
              value={formData.author}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="form-genre"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Gênero:
            </label>
            <select
              id="form-genre"
              name="genre"
              value={formData.genre}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
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
            <label
              htmlFor="form-date"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Data:
            </label>
            <input
              type="date"
              id="form-date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={handleCancelEdit}
              className="px-4 py-2 rounded-md text-sm bg-gray-300"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-md text-sm bg-gray-300"
            >
              Atualizar Livro
            </button>
          </div>
        </form>
      </div>
      {books.map((book) => (
        <div
          key={book.id}
          className="flex gap-4 mb-2 items-center p-2 border-b w-full max-w-2xl justify-between"
        >
          <p className="">
            {book.id}. {book.title} - {book.author} - {book.genre} - {book.date}
          </p>
          <div className="flex gap-2">
            <button
              className="bg-gray-300 py-1 px-3 rounded text-sm"
              onClick={() => handleStartEdit(book)}
            >
              Editar
            </button>
            <button
              className="bg-gray-300 py-1 px-3 rounded text-sm"
              onClick={() => onDelete(book.id)}
            >
              Excluir
            </button>
          </div>
        </div>
      ))}
      {books.length === 0 && <p>Não há livros cadastrados.</p>}
    </div>
  );
}

export default BookList;
