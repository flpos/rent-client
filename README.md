# Rent-client

Cliente de aluguel de carros

## Como iniciar a aplicação

### Docker compose

O comando do docker compose faz um build e utiliza o nginx para servir os arquivos estáticos, nesse modo o front utiliza um proxy reverso para acessar a url do backend, podendo gerar um build e mudar a url conforme o necessário, utilizando variável de ambiente para o docker.
```sh
docker-compose up
```

### yarn

Outra forma, mais simples, de se iniciar, é utilizando o yarn
```sh
yarn start
```
desta forma a url do backend fica configurada no arquivo .env, na raiz do projeto.

## Aplicação

Nessa aplicação utilizei o create-react-app para iniciar o projeto, com o template de typescript. Utilizei também a lib de componentes Material UI, o foco do projeto foi na organização de código e alguns conceitos de arquitetura limpa.

Utilizo jest com testing-library para os testes, o projeto foi feito guiado por TDD.

## Observações e considerações

Não foi implementado autenticação no projeto, o que define se o usuário está logado é um objeto no localStorage.

Não há feedback de erros de comunicação com a api, apesar de essencial numa situação real, dei priorida a outros aspectos da aplicação.

O aspecto da aplicação é simples, visualmente é o mínimo para chegar ao objetivo (fluxo de aluguel de carros)
