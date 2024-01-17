# Guia Gourmet

<img src="/guiaGourmet/src/assets/images/logo.png" width="300">

## Descrição do Projeto

    O objetivo é desenvolver uma aplicação responsiva de menu, com restaurantes e produtos.
    
    É possivel filtrar por estabelecimentos, produtos ou pela descrição do produto.
    Ao clicar no card de um estabelecimento, o usuário é redirecionado para a tela
    de detalhes do mesmo, que mostra todos os produtos vendidos nele.
    Ao clicar no card de um produto, a tela de detalhes mostra quais são os estabelecimentos
    que vendem o produto selecionado. 

## Configuração
    1. Clone esse repositório
    2. Acesse separadamente as pastas back-end e grao_direto (esta pasta contém o front-end)
    3. Rode `npm install` em ambas
    4. No backend:
      - Renomeie o arquivo env.example para .env
      - Rode `docker-compose up` para criar o banco de dados PostgreSQL em um container
      - Abra seu gerenciador de banco de dados (i.e. DBeaver)
      - Copie o conteúdo do arquivo init.txt contido na raiz deste projeto
      - Rode os comandos para popular o banco de dados
      - Em outro terminal rode o comando `npm start`
    5. Na pasta grao_direto
        *Node v18.16.1 necessária para rodar o Angular 17*
      - Rode `ng serve --open`
      
## Credenciais de acesso
    Para acessar essa aplicação é necessário logar com as seguintes credenciais:
    
    **email**: geralt@cdproject.com
    **senha**: 123456
    
    Essa aplicação usa bcrypt para validar o login.

## Tecnologias Utilizadas

- Angular 17
- Angular Material
- RxJs
- NodeJS v18.16.1
- bcrypt
- PostgreSQL
- Docker

## Exemplo de telas

<img src="/images/login01.png" width="300">
<img src="/images/home01.png" width="300">
<img src="/images/home02.png" width="300">
<img src="/images/home03.png" width="300">
<img src="/images/item01.png" width="300">
<img src="/images/restaurante01.png" width="300">
