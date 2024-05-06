# 🚀 API RESTful com Node.js, Express.js e MongoDB - Autenticação JWT

Bem-vindo ao projeto **AuthAPI**! Este é um exemplo de uma API RESTful construída com: Node.js, Express.js e MongoDB. Além disso, implementei a autenticação JWT para tornar a aplicação mais segura.

## 📚 Estrutura do Projeto

Meu projeto tem uma estrutura de diretórios bem organizada e fácil de entender:


/myapp /node_modules /routes index.js users.js /models user.js /middleware auth.js app.js package.json


## 🛠️ Instalação

Antes de tudo, certifique-se de ter o Node.js e npm instalados em seu ambiente. Depois de clonar o projeto, você pode instalar as dependências executando:

🌐 Rotas
Nosso projeto define as seguintes rotas:

GET /: Retorna um objeto JSON com a propriedade title definida como ‘Express’.
POST /users/register: Registra um novo usuário.
POST /users/login: Faz login de um usuário registrado.
GET /users/me: Visualiza o perfil do usuário logado.
POST /users/me/logout: Faz logout do usuário da aplicação.
POST /users/me/logoutall: Faz logout do usuário em todos os dispositivos.

```bash
npm install

🚀 Uso
Para iniciar o servidor, execute:

npm start
