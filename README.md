## Nome: `Enzo Cezar Garcia Rocha`

Para executar este projeto:

1. Entre na pasta reading-journal no terminal:

```
cd reading-journal
```

2. Rode npm install para instalar as dependências do projeto:

```
npm install
```

3. E em seguida, npm start, para iniciar a execução do projeto.

```
npm run dev
```

4. Por último, abra o link que vai estar sendo exibido no terminal, será algo como:

```
  VITE v6.3.5  ready in 271 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

![Gif mostrando o resultado esperado ao rodar este projeto](./public/projeto-fase-1.gif)

## Introdução

Este projeto foi desenvolvido para a disciplina de Desenvolvimento de Sistemas Frontend do curso de Análise e Desenvolvimento de Sistemas da PUCRS. Foi desenvolvido utilizando ReactJS e TailwindCSS. Em sua primeira fase, a aplicação explora o CRUD de um Reading Journal possibilitando adicionar, editar e remover livros de uma lista.

## Componentes

Os componentes estão no diretório `./src/components` e eles possuem as seguintes características:

- About:

  - Descrição: este componente é uma página simples com informativos à respeito do projeto.

- BookForm:

  - `props`
    - label: um parâmetro que define o texto exibido no botão do BookForm, caso haja necessidade de alterar de 'Cadastrar' para 'Salvar Alterações', por exemplo;
    - onFormSubmit: referência para chamar o método handleAddBook - adiciona livros no array `books` encontrado em `App.jsx` - do seu componente pai passando os dados do formulário;
  - Descrição: este componente é utilizado para cadastrar livros através de um `<form>` e se encontra na página "Cadastrar".

- BookList:

  - `props`
    - books: um array com a lista de livros cadastrados que será exibido no componente;
    - onDelete: referência para chamar o método handleDeleteBook do seu componente pai que exclui livros do array `books`;
    - onUpdate: referência para chamar o método handleUpdateBook do seu componente pai que edita um livro específico do array `books`;
  - Descrição: este componente exibe a lista de livros cadastrados, assim como o formulário para edição deles quando for ativado pelo botão `Editar`.

- Home:

  - Descrição: este componente é uma home page simples que contém apenas uma mensagem de boas-vindas. É a página inicial da aplicação.

- NavBar:
  - `props`
    - navLinks: é utilizado para passar o array `routes` com a definição das rotas utilizadas para navegação na aplicação;
  - Descrição: este componente utiliza Link do React Router para mostrar as páginas disponíveis em uma barra de navegação.

## Conclusão

Este projeto foi desenvolvido por Enzo Cezar Garcia Rocha para fins educacionais e é uma atividade avaliativa da disciplina de Desenvolvimento de Sistemas Frontend da Pontifícia Universidade Católica do Rio Grande do Sul.
