# curso-react
Repositorio desenvolvido para auxiliar em um curso de introdução ao react com TypeScript

### Criação do primeiro projet

Este repositório contém a configuração inicial de um projeto React utilizando TypeScript, com as dependências essenciais para desenvolvimento.

## Requisitos
Certifique-se de ter instalado previamente:
- [Node.js](https://nodejs.org/) (versão recomendada LTS)
- npm (gerenciador de pacotes do Node.js)

## Instalação

Siga os passos abaixo para configurar o ambiente:

1. Crie um novo projeto utilizando o Vite com React e TypeScript:

   ```sh
   npx create vite@latest [nome-do-seu-projeto] --template react-ts
   cd [nome-do-seu-projeto]
   ```

2. Instale as dependências do projeto:

   ```sh
   npm install @mui/material @emotion/react @emotion/styled
   npm install @mui/icons-material
   npm install axios
   npm install react-router-dom
   npm install react-hook-form
   ```

## Executando o projeto

Para iniciar o projeto em modo de desenvolvimento, utilize o comando:

```sh
npm run dev
```

O projeto será iniciado e poderá ser acessado via navegador no endereço indicado no terminal (geralmente `http://localhost:5173`).


## Scripts disponíveis

- `npm run dev` - Inicia o projeto em ambiente de desenvolvimento.
- `npm run build` - Compila o projeto para produção.




