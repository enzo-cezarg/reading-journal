function BookList({books}) {
	return (
		<div className="flex flex-col justify-center items-center">
			<h1 className="text-4xl font-bold">Lista de Livros</h1>
			{
				books.map((book) => <h1>{book.id}. {book.title} - {book.author} - {book.genre} - {book.date}</h1>)
			}
		</div>
	)
}

export default BookList;