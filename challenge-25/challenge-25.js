/*
Essa semana você terá dois desafios:
1) Revisar todo o contéudo passado até aqui, e ver se você realmente entendeu
tudo o que foi passado! Se tiver dúvidas, anote, e então abra issues,
ou comente no seu pull request mesmo, que eu irei ajudá-lo a entender
o que não ficou tão claro das aulas anteriores.
É essencial que você entenda todo o conteúdo que foi passado até aqui,
para que possamos prosseguir para a parte mais avançada do curso :D

2) Estudar eventos!
Acesse a página do MDN:
https://developer.mozilla.org/en-US/docs/Web/Events#Categories

Tente aplicar na prática alguns dos eventos que estão ali e coloque nesse
desafio os experimentos legais que você conseguir desenvolver :D
*/
/*
var elementDiv = document.querySelector('div');
elementDiv.addEventListener('click',function(){
  console.log('fire/trigger addEventListener')}, false);

// property event handler
elementDiv.onclick = function(){
  console.log('I\'m first, but I get overridden/replaced')
};
//overrides/replaces the prior value
elementDiv.onclick = function(){
  console.log('I win')
};


// -------------- MOUSE EVENTS ------------
var elementMouse = document.getElementById('mouse');
elementMouse.addEventListener('dblclick', function(){
  console.log('Evento Mouse acionado!');
})
*/



// --------- 11.3 The Event Flow------------
/*
var elementFlow = document.getElementById('flow');
//1 capture phase
window.addEventListener('click',function(){console.log(1);},true);
//2 capture phase
document.addEventListener('click',function(){console.log(2);},true);
//3 capture phase
document.documentElement.addEventListener('click',function(){console.log(3);},true);
//4 capture phase
document.body.addEventListener('click',function(){console.log(4);},true);
//5 target phase occurs during capture phase
document.querySelector('div').addEventListener('click',function(){console.log(5);},true);
//6 target phase occurs during bubbling phase
document.querySelector('div').addEventListener('click',function(){console.log(6);},false);
//7 bubbling phase
document.body.addEventListener('click',function(){console.log(7);},false);
//8 bubbling phase
document.documentElement.addEventListener('click',function(){console.log(8);},false);
//9 bubbling phase
document.addEventListener('click',function(){console.log(9);},false);
//10 bubbling phase
window.addEventListener('click',function(){console.log(10)},false);
*/


/*---  11.4 Adding Event Listeners to Element Nodes  ---*/

document.querySelector('div').addEventListener('mousemove',function(){
  console.log('moving over div');},false
);


/*----------  11.5 Removing Event Listeners  ----------*/
var sayHi = function(){console.log('hi')};

//adding event listener using anonymous function
document.body.addEventListener('click',function(){
  console.log('dude');},false
);

//adding event listener using function reference
document.querySelector('div').addEventListener('click',sayHi,false);

/* attempt to remove both event listeners, but only the listener added with a
function reference is removed */
document.querySelector('div').removeEventListener('click',sayHi,false);

/* this of course does not work as the function passed to removeEventListener is a
new and different function */
document.body.removeEventListener('click',function(){console.log('dude');},false)
