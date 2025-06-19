import { useState, useEffect } from "react";

function BookList({ books, onDelete, onUpdate }) {
  const [formVisible, setFormVisible] = useState(false);
  const [currentEditingBook, setCurrentEditingBook] = useState(null);

  const [formData, setFormData] = useState({
    id: "",
    title: "",
    author: "",
    genre: "Romance",
    readAt: "",
  });

  useEffect(() => {
    if (currentEditingBook) {
      setFormData({
        id: currentEditingBook.id || "",
        title: currentEditingBook.title || "",
        author: currentEditingBook.author || "",
        genre: currentEditingBook.genre || "Romance",
        readAt: currentEditingBook.readAt || "",
      });
      setFormVisible(true);
    } else {
      setFormData({
        id: "",
        title: "",
        author: "",
        genre: "Romance",
        readAt: "",
      });
    }
  }, [currentEditingBook]);

  const handleStartEdit = (book) => {
    setCurrentEditingBook(book);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
      <h1 className="text-4xl font-bold mb-8">Lista de Livros</h1>

      <div className={formVisible ? "" : "hidden"}>
        <form
          onSubmit={handleSubmitUpdate}
          className="m-8 w-64 sm:w-96 bg-white p-8 shadow-lg rounded-md"
        >
          <div className="flex items-center justify-center mb-4">
            <p className="text-2xl font-bold">Editar</p>
          </div>
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
              name="readAt"
              value={formData.readAt}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={handleCancelEdit}
              className="px-4 py-2 rounded-md text-sm bg-red-500 text-white font-medium transition duration-100 hover:bg-red-600"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-md text-sm bg-green-500 text-white font-medium transition duration-100 hover:bg-green-600"
            >
              Atualizar Livro
            </button>
          </div>
        </form>
      </div>
      {books.map((book) => (
        <div
          key={book.id}
          className="flex gap-4 mb-2 items-center py-2 px-4 border-b w-full max-w-xl justify-between bg-white shadow-md"
        >
          <div className="flex flex-col gap-2 px-2 py-4">
            <p className="">
              <span className="font-bold">Título:</span> {book.title}
            </p>
            <p className="">
              <span className="font-bold">Autor:</span> {book.author}
            </p>
            <p className="">
              <span className="font-bold">Gênero:</span> {book.genre}
            </p>
            <p className="">
              <span className="font-bold">Lido em:</span> {book.readAt}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <button
              className="border-2 border-black font-medium transition duration-100 hover:bg-gray-200 py-1 px-3 rounded text-sm"
              onClick={() => handleStartEdit(book)}
            >
              Editar
            </button>
            <button
              className="bg-red-500 text-white font-bold transition duration-100 hover:bg-red-600 py-1 px-3 rounded text-sm"
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
