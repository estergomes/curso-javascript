/*
// Notas
// Criação de objetos → são mutáveis e manipulado por refe.
var obj = { prop1: 'valor1', prop2: 'valor2'};
delete(obj.prop1);
console.log(obj);

var obj = { prop1: 'valor1', prop2: 'valor2'};
var obj2 = Object.create(obj);
console.log(obj2.prop2); //referencia, herda as props do obj
var obj2 = Object.create({}); //objeto vazio
console.log(obj2);

// Methods
var obj = { prop1: 'valor1', prop2: 'valor2'};
var obj2 = { prop3: 'valor1', prop4: 'valor2'};
console.log(Object.keys(obj2));

obj = obj2;
obj2 = obj;
// isPrototypeOf
console.log(obj.isPrototypeOf(obj2));
console.log(obj2.isPrototypeOf(obj));

// JSON.stringify
console.log(JSON.stringify(obj));
var str = JSON.stringify(obj);
console.log(str);
// JSON.parse
console.log(JSON.parse(str));

// add items array
var arr = [];
arr[0] = 10;
arr.push('asa');
arr.pop()
var arr2 = ['1','2','3'];
console.log(arr2.join(' '));
console.log(arr2.reverse());
var arr3 = ['acaraje', 'sorvete', 'manga'];
console.log(arr3.sort());

console.log('----------------------------------');
*/

/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
// ?
console.log( 'Propriedades de "person":' );

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
// ?

/*
Crie um array vazio chamado `books`.
*/
// ?

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
// ?
console.log( '\nLista de livros:' );

/*
Mostre no console todos os livros.
*/
// ?

console.log( '\nLivro que está sendo removido:' );
/*
Remova o último livro, e mostre-o no console.
*/
// ?

console.log( '\nAgora sobraram somente os livros:' );
/*
Mostre no console os livros restantes.
*/
// ?

/*
Converta os objetos que ficaram em `books` para strings.
*/
// ?
console.log( '\nLivros em formato string:' );

/*
Mostre os livros nesse formato no console:
*/
// ?

/*
Converta os livros novamente para objeto.
*/
// ?
console.log( '\nAgora os livros são objetos novamente:' );

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
// ?

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
// ?
console.log( '\nMeu nome é:' );

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
// ?

console.log( '\nMeu nome invertido é:' );

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
// ?

console.log( '\nAgora em ordem alfabética:' );
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
// ?
