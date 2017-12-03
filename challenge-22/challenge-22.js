  // notas
  // metodos function

  function myFunction(a,b,c,d){
    console.log(this.lastName);
    return 'oi';
  }

  var obj = {
    lastName:'blabla',
    prop1:1,
    prop2:2
  };

  var arr = [1,2,3];

  console.log(myFunction.length); // qtde parametros (a,b,c,d)
  console.log(myFunction.name);
  // toString
  console.log(myFunction.toString());
  console.log(myFunction.call(this)); // this → obj

  // array como para parametros da função
  console.log('Apply: ' +myFunction.apply(obj, arr));

  // prototype
  function myFunction2(name, lastName){
    this.name = name;
    this.lastName=lastName;
  }
  myFunction2.prototype.fullName = function(){
    return this.name +' '+this.lastName;
  }
  // add property
  myFunction2.prototype.age = 30;

  var ester = new myFunction2('Ester', 'Gomes');
  console.log('Full name: '+ester.fullName());

  // Array-like prototype
  function myFunction3(){
    var arr = [1,2,3,4];
    arr.forEach(function(item, index){
      console.log(this);
    }, arguments);
  }
  console.log(myFunction3(1,2,3,4,5,6));












  /*
  Crie dois objetos, que serão duas pessoas. Cada um deve ter as propriedades
  `name` e `lastName`, preenchidos com o nome e sobrenome da pessoa.
  */
  // ?

  /*
  Agora crie uma função chamada `getFullName` que retorne as propriedades
  `name` e `lastName` dos objetos acima, formando um nome completo.
  A função não deve receber nenhum parâmetro, mas as propriedades `name` e
  `lastName` devem ser dinâmicas.
  A mesma função deve servir para as duas pessoas (ou qualquer outra que for
  criada).
  Depois disso, invoque essa função, mostrando no console o nome completo das
  pessoas que foram criadas anteriormente, passando as pessoas acima como
  contexto da função. Use um console.log por pessoa.
  */
  console.log( 'O nome das pessoas é:' );
  // ?

  /*
  Crie uma função chamada `sum`. Essa função pode receber uma lista de
  parâmetros variável, e deverá retornar a soma de todos eles.
  Não use estruturas de repetição para somar os argumentos.
  Na primeira linha, dentro da função, deixe um console.log para mostrar todos
  os parâmetros passados para essa função.
  */
  // ?

  /*
  Mostre no console que a função acima funciona, invocando-a em 3 console.log
  diferentes, com quantidades variáveis de parâmetros passados.
  */
  console.log( '\nSomar alguns números:' );
  // ?

  /*
  Declare uma variável chamada `userEntry`, que irá receber alguns valores
  entrados pelo usuário. Mostre para o usuário a seguinte frase:
  "Entre com alguns números que serão somados:"
  */
  // ?

  /*
  Mostre no console o valor entrado pelo usuário:
  */
  console.log( '\nEntrada do usuário:' );
  // ?

  /*
  Crie uma função chamada `justNumbers`, que recebe por parâmetro uma string
  e remove tudo o que não for número, retornando um array somente com os números
  da string. Mostre a representação em string dessa função no console.
  */
  console.log( '\nFunção que limpa entrada do usuário (somente números):' );
  // ?

  /*
  Usando a função acima, faça a limpeza dos valores entrados pelo usuário,
  atribuindo o resultado à uma variável `numbers`.
  */
  console.log( '\nEntrada do usuário limpa. Somente números:' );
  // ?

  /*
  Agora com o array de números, utilize a função `sum` para somar todos os
  números desse array e mostre o resultado no console.
  */
  console.log( '\nSomar números entrados pelo usuário:' );
  // ?
