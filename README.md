# Cypress-Tests-API-Prova-QA
Prova QA - Automação de testes API com Cypress


Projeto: Testes de API com Cypress API Trello

Informações básicas para realizar a instalação das tecnologias e configurações. 

**Plataforma**: Click para consultar a plataforma de exemplo [Trello](https://developer.atlassian.com/cloud/trello/rest/)

Acesse o mapa mental do planejamento: [clique aqui](https://gitmind.com/app/docs/m3wfukqt)


## Dependências utilizado com cypress no projeto.

+ [Allure Report](https://allurereport.org/docs/cypress/)
+ [Joi](https://joi.dev/api/)
+ [cypress/grep](https://github.com/cypress-io/cypress/tree/develop/npm/grep)

## Instalação do Gerenciador de Pacotes NodeJS.

Para instalar o NodeJs acesse o site oficial, click em Download [Versão LTS é a mais estável](https://nodejs.org/en/). 


## Instalação do Cypress e dependências

### No terminal execute o comando para instalação:

```
npm install
```

## Execução dos testes

Obs: Antes da execução deve inserir sua apiKey e apiToken no arquivo cypress.env.json

### Para executar os testes pela interface do cypress:

```
npm run cy:open
```
### Para executar todos os testes, execute no terminal: 

```
npm run cy:run
```

### Para executar os testes por tags, execute no terminal:

```
npx cypress run -e grepTags=@tag
```

### Para executar o report Allure, execute no terminal:


Após a execução dos testes, execute os comando abaixo para gerar e abrir o report:
```
npx allure generate allure-results
```
```
npx allure open
```