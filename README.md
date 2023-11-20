# Challenge Frontend Estadão

## Rodando o projeto

1. Clone esse repositório.

        git clone https://github.com/leonardo-earruda/estadao-frontend-challenge

2. Na sua IDE de preferência, rode o comando `npm install`.

3. Navegue até `http://localhost:4200/`.
---

## Arquitetura

### Geral
- Para fazer a modularização do projeto, abstrai os requisitos dos desafios e separei a estrutura de pastas do projetos entre os módulos de: 'cards', 'decks' e 'shared', para componentes compartilhados entre os outros dois.
  
- Para o roteamento do projeto, adotei a estratégia de lazy loading, utilizando a abstração mencionada acima para declarar as rotas pais: ***decks*** e ***cards***, e seus respectivos filhos: ***all***, ***create*** e ***details***

- Para o tratamento de erros do projeto, utilizei a estratégia de prover um ***Global Error Handler***, que abrirá um componente de snackbar toda vez que a API externa retornar um erro.

### API 
- Esse projeto consome uma API externa que retorna dados referentes ao desenho **"Pokémon"**.
  
- Para autenticação na mesma, foi criado um **HTTP Interceptor** no projeto, que adicionara uma **API KEY** nos cabeçalhos das requisições feitas pelo nosso client.
