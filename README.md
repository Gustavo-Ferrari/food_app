# Guia Gourmet

## Descrição do Projeto

    Este projeto é parte do processo seletivo para a Grão Direto.
    O objetivo é desenvolver uma aplicação responsiva de menu, com restaurantes e produtos.
    
    É possivel filtrar por estabelecimentos, produtos ou pela descrição do produto.
    Ao clicar no card de um estabelecimento, o usuário é redirecionado para a tela
    de detalhes do estabelecimento, que mostra todos os produtos vendidos nele.
    Ao clicar no card de um produto, a tela de detaalhes mostra quais são os estabelecimentos
    que vendem aquele produto selecionado. 

## Configuração
    1. Clone esse repositório
    2. Acesse separadamente as pastas back-end e grao_direto (esta pasta contém o front-end)
    3. Rode `npm install` em ambas
    4. No backend:
      - Rode `docker-compose up` para criar o banco de dados PostgreSQL em um container
      - Em outro terminal rode o comando `npm start`
      - Abra seu gerenciador de banco de dados (i.e. DBeaver)
      - Copie o conteúdo do arquivo init.txt contido na raiz deste projeto
      - Rode os comandos para popular o banco de dados
        **Essa etapa é crucial para o funcionamento da aplicação**
    5. Na pasta grao_direto
      - Rode `ng serve --open`
      
## Credencias de acesso
    Para acessar essa aplicação é necessário logar com as seguintes credenciais:
    
    **email**: geralt@cdproject.com
    **senha**: 123456
    
    Essa aplicação usa bcrypt para validar a senha.

## Tecnologias Utilizadas

- Angular 17
- Angular Material
- RxJs
- NodeJS
- bcrypt
- PostgreSQL
- 
## Exemplo de telas

<img src="/images/login01.png" width="300">
<img src="/images/home01.png" width="300">
<img src="/images/home02.png" width="300">
<img src="/images/home03.png" width="300">
<img src="/images/item01.png" width="300">
<img src="/images/restaurante01.png" width="300">