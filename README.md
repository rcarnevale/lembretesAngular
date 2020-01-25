#Lembretes
Este projeto foi desenvolvido como teste para uma vaga de desenvolvedor júnior.

O projeto foi gerado com Angular CLI na versão 6.0.7.

#Dependências
Para instalar as dependências devemos começar com o Angular CLI através do comando:

````
npm install -g @angular/cli@6.0.7
````

Utilizaremos o JSON-server como servidor local para testes, portanto devemos executar o comando:

````
npm install -g json-server
````

Através do terminal, devemos acessar a pasta json-server, contida na raiz do projeto, e executar o comando:

````
json-server --watch db.json
````

Finalmente, na pasta raiz temos de executar:

````
ng serve --open
````

O projeto abrirá em uma aba de seu navegador.

#Problemas conhecidos
Eventualmente, o projeto acusará erro na dependência rxjs, se isso ocorrer, execute o seguinte comando na pasta raiz:

````
npm install rxjs@6.0.0 --save
````

Também é conhecido um bug na abertura do modal do edit.
