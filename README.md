## MY Wallet

O "My wallet" é um projeto acadêmico criado para aprender e utilizar conceitos de frontend.

## Começando

Para começar, é necessário que você possua o docker, docker compose e o yarn(para usar os scripts), para instalar tudo de necessário.

Para iniciar a aplicação em desenvolvimento, digite

```bash
yarn dev:up
```

Para iniciar em produção, digite

```bash
yarn prod:up
```

Caso você não queira instalar o yarn na sua máquina, rode diretamente os comandos com o docker compose

Para desenvolvimento, use

```bash
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up
```

Para produção, use

```bash
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up
```

## Testes

Para rodar os testes, use

```bash
yarn test
```

## Documentação

Para abrir o storybook e acessar a documentação dos componentes, use

```bash
yarn storybook
```

## Criado por

- Laércio Bubiak
- Ana França
- Bruno Douglas
- João Paulo