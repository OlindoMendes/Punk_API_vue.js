# punk_api

SOBRE O PROJETO!

1 - CRUD realizado no FrontEnd.
2 - Para autenticação Login e SignUp foi feita a partir da API do Firebase (link doc: https://firebase.google.com/docs/reference/rest/auth#section-sign-in-email-password)
3 - É necessário gerar uma chave e substituir no final do sndpoint ([KEY_API] inclusive os colchetes)
4 - Para testar a implementação é necessário se registrar na aplicação e só depois fazer o login (https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY] &
https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY])
5 - É possível editar e excluir os dados da API, porém, não são persistidos.
6 - Fazer logout, como feature adicional.
7 - Como extra, foi feito o build do projeto kkkkkk

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
