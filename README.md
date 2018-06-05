# MyReads Project

O projeto MyReads é uma estante de livros que permite que o usuário adicione livros nas estantes 
e altere o livro entre as estantes (lendo, quero ler, lido)

Como rodar a aplicação:

* Na pasta myreads - Instale todas as dependências `npm install`
* Starte a aplicação `npm start`

## Principais arquivos do projeto
```bash
└── src
    ├── App.js # This is the root of your app. Contains static HTML right now.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
    |__ BookList.js # Componente pai do componente que lista as shelfs
    |__ Bookshelf.js # Responsável por renderizar a lista de shelfs
    |__ Book.js # Responsável pela renderização do livro 
    |__ SearchBook.js # Rensponsável pela busca de livros

    ***
    Além das funções mínimas, inclui a função que remove todos os livros das shelfs iniciais

```
