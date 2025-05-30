function BookList({books, onDelete, onUpdate}) {

	const handleUpdate = (book) => {console.log(book)};

	return (
		<div className="flex flex-col justify-center items-center">
			<h1 className="text-4xl font-bold mb-4">Lista de Livros</h1>
			{
				(books.length > 0) 
				? books.map((book) => <div className="flex gap-4 mb-2 items-center">
					<p className="">{book.id}. {book.title} - {book.author} - {book.genre} - {book.date}</p>
					<button className="bg-gray-300 py-1 px-3" onClick={() => handleUpdate(book)}>Editar</button>
					<button className="bg-gray-300 py-1 px-3" onClick={() => onDelete(book.id)}>Excluir</button>
				</div>) 
				: <p>Não há livros cadastrados.</p>
			}
			
		</div>
	)
}

export default BookList;