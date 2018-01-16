// Closures

(function(){
  'use strict';

  /*
  var scope = 'global scope';
  function checkScope() {
    var scope = 'local scope';
    
    function func(){ return scope;}

    return func();
  }
  console.log(scope) //global
  console.log(checkScope()) //local
  console.log(checkScope()()) //local
*/


  // exemplo 2
  // var counter = 0; 
  
  // counter compartilhado ocom duas functions abaixo
  // function increment(){
  //   return counter++;
  // }
  
  // com escopo local
  // var increment = (function(){
  //   var counter = 100;
  //   return (function(){
  //     var counter = 10; // escopo mais proximo
  //     return function (){
  //      return counter++;
  //     }
  //   })();
  // })();
  
  // function otherFunction(){
  //   counter = 150;
  // }

  // console.log(increment());
  // console.log(increment());
  // console.log(increment());
  // console.log(increment());
  // console.log(increment());
  // console.log(increment());


// manipular css

var $div = document.querySelector('div');
$div.style.width = '100px';
$div.style.height = '100px';
$div.style.backgroundColor = 'purple';

// bad
// $div.setAttribute('style', 'width:100px');

// good
// $div.classList.add('red');

// toogle
// var $div = document.querySelector('div');
$div.addEventListener('click', function(){
  this.classList.toggle('blue');
}, false);


// setInterval(function(){
//   for(var i = 10; i > 0; i++){
//     return $div.style.width = i;
//   }
  
// },1000);




// O objeto Date

var year = 2015;
var month = 10;
var day = 7;
var date =new Date(year)


// Math
Math.abs(-10) //sempre valor positivo
Math.ceil(10.2) // arredonda pra cima
Math.floor(10.2) // arredonda pra baixo



// AJAX & REST API
// → nodemon index.js - sobe server
// →cd  npm install --save express

'use strict';

var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('<h1> Home </h1>');
});

app.get('/user', function(req, res){
  res.send('User');
});

app.listen(3000);

})();