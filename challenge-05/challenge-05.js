/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// ?
var arr = ['casa','mel',true,156];
console.log(arr);
console.log('---------------------------');
  
/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// ?
function myFunc(someArg){
  console.log(someArg);
};
myFunc(arr);
console.log('---------------------------');


/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// ?
console.log(myFunc(arr[1]));
console.log('---------------------------');


/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
// ?

var arr2 = ["SOAD", "Slipknot", "Nirvana", "Green Day"];

function myFunc2(arr2, index){
  console.log(arr2[index]);
}
myFunc2(arr2, 3)
console.log('---------------------------');



/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// ?
var arr3 = ["Russia", 123, true, [1,2,3],{country: "New Zealand"}];
console.log(arr3);
console.log('---------------------------');



/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// ?
myFunc2(arr3, 4)
console.log(arr3);
console.log('---------------------------');


/*
Crie uma função chamada :book:, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - :quantidadePaginas: - Number (quantidade de páginas)
    - :autor: - String
    - :editora: - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
// ?
console.log('---------------------------');
function book(bookName){
  var bookProps = {
    'Black Cat':   { quantidadePaginas: 380,  autor: 'Edgar Allan Poe',  editora: 'editora' },
    'Cosmos':      { quantidadePaginas: 260,  autor: 'Carl Sagan',  editora: 'editora' },
    'Hunger Games': { quantidadePaginas: 540,  autor: 'Susanne Collins',  editora: 'editora'}
  }
  // ternario
  var retbook = !bookName ? bookProps : bookProps[bookName];
  return retbook;

  // if(!bookName){console.log(bookProps)}
  // console.log(bookProps[bookName]);
 }
book('Cosmos');
console.log('---------------------------');
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?
book();
console.log('---------------------------');


/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?

var bookName = "Cosmos";
var fnBook = book(bookName);
console.log("O livro "+ bookName + " tem " + fnBook.quantidadePaginas +" páginas!");

console.log('---------------------------');
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?
console.log("O autor do livro "+bookName +" é " + fnBook.autor+ ".");
console.log('---------------------------');
/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?

console.log("O livro " + bookName+" foi publicado pela editora " +fnBook.editora + ".");
console.log('---------------------------');
