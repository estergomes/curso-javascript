# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function somar(a, b){
  return a + b;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var invocarSomar = somar(6, 3)+5;
console.log(invocarSomar);

// Qual o valor atualizado dessa variável
// 14

// Declare uma nova variável, sem valor.
var nova;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function novoVal(){
  nova = 'VALOR';
  return 'O valor da variável agora é ' + nova;
}

// Invoque a função criada acima.
console.log(novoVal());

// Qual o retorno da função (Use comentários de bloco).

//VALOR

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function triple(z,v,y){
   if(z === undefined || v === undefined || y === undefined){
      return 'Preencha todos os valores corretamente!';
    }
    return z * v * y + 2;
  }
console.log(triple());


// Invoque a função criada acima, passando só dois números como argumento.
console.log(triple(2,3));

// Qual o resultado da invocação acima (Use comentários para mostrar o valor retornado).


// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
console.log(triple(2,3,6));

// Qual o resultado da invocação acima (Use comentários para mostrar o valor retornado).
// 38

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function someFunc(q,w,e){
  if(q !== undefined && w === undefined && e === undefined){
    return q;
  } else if (q !== undefined && w !== undefined && e === undefined) {
    return q + w;
  } else if (q !== undefined && w !== undefined && e !== undefined) {
    return (q + w) / e;
  } else if (q === undefined && w === undefined && e === undefined) {
    return false;
  } else {
    return null;
  }
}
console.log("someFunc: " + someFunc(10));
console.log("someFunc: " + someFunc(10,10));
console.log("someFunc: " + someFunc(10,10,2));
console.log("someFunc: " + someFunc());
console.log("someFunc: " + someFunc(10,10,2,5));
// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

```
