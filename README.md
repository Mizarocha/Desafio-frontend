
<h1 align="center"> Desafio Front-End</h1>

### Proposta: 
É desenvolver um front-end para uma API RESTful. No cenário proposto, a interface deve exibir posts de um blog e, ao clicar em um post, os
comentários associados.

### Resolver: 

Tem que projetar uma interface para atender as necessidades.   

Os seguintes serviços estão disponíveis:    
- Listagem de posts:        
o https://jsonplaceholder.typicode.com/posts       
- Listagem de comentários de um post:      
o https://jsonplaceholder.typicode.com/posts/[ID]/comments      
- Listagem de usuários:      
o https://jsonplaceholder.typicode.com/users      
- Detalhes de um usuário:      
o https://jsonplaceholder.typicode.com/users/[ID]     

### Solução: 
Projeto criado com Create React App.        
Consumo os Posts no componente principal utilizando o método Fetch do próprio Javascript. Passo os dados da api para o componente Post através de Prop utilizando uma useMemo função, que faz uma comparação com os dados atuais para evitar renderizações desnecessárias.

No componente Posts, consumo os comentários, passando o ID associado de cada post, e os renderizo através de um evento de onClick, que mostrará esses comentários.


No componente DetailsUsers, consumo os detalhes, passando o ID associado de cada usuário, e os renderizo através de um evento de onClick, que mostrará os usuários.

Com o Async/await são a forma de escrever promises que nos permitam escrever código assíncrono que parece síncrono.

A funções async/await é de simplificar o uso de forma síncrona das Promises e executar alguns procedimentos em um grupo de Promises. 
Isso significa que agora é mais fácil pensar o código. Além disso, agora podemos usar as ferramentas síncronas, como o try/catch que foi usado para lidar com erros.
Assim foi criada a função que irá consumir os dados da Api e dentro da função criei um try catch e depois vai executar a função no useEffect.
Porque se tiver algum problema com a API, o código não quebra, porque tá dentro do try catch.


### Foi utilizado: 

- Ferramenta:     
[Visual Studio Code](https://code.visualstudio.com/)              

- Linguagem:   
[HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/html), [CSS](https://developer.mozilla.org/pt-BR/docs/Learn/Getting_started_with_the_web/CSS_basics) e [JAVA SCRIPT](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)              
 
- Framework:   
[React.js](https://pt-br.reactjs.org/)     

### Deploy: 

- [VERCEL](https://vercel.com/)
- URL https://desafio-frontend-nine.vercel.app/

### Rodar Projeto:    

Clone o projeto com esse comando:

```
https://github.com/Mizarocha/Desafio-frontend.git
```
Instale a dependência do projeto:
```
npm install 
```
Para iniciar o comando da:
```
npm start
``` 

<h3 align="center"> Autora: Artemiza Rocha</h3>   

<div align="center">
  <a href="https://www.linkedin.com/in/artemiza-rocha/a" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
  <a href="https://github.com/Mizarocha" target="_blank"><img src="https://img.shields.io/badge/-GITHUB-%23E4405F?style=for-the-badge&logo=github&logoColor=white" target="_blank"></a>
  </div>

<h4 align="center">Desenvolvido com 💜 </h4>
