# Food-Catalog

Este app mostra um livro de receitas em uma API mockada com JSON server.

<image src="demo.gif" controls>
</image>

# Pré-requisito

É necessário configurar e instalar algumas dependências.

### JSON Server

Para rodar o app de maneira local na sua maquina é necessário instalar e configura uma depedencia que é o JSON server.

```
npm install -g json-server
``` 
Com o JSON server instalado, é necessário configurá-lo. Vá em `src/utils/recipes.ts` e altere o valor da constante URL da seguinte maneira:

```
const url = 'http://{seu endereço IP}:3000/recipes';
```

Troque o valor de `{seu endereço IP}` para o seu IP. Feita essa troca, basta iniciar o servidor JSON:


```
npm run start -- --host {seu endereço IP}
```

### Depedencias

É necessário rodar o comando abaixo após baixar o repositório:

```
npm i
```
