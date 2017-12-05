(function(){
'use strict'
// Notes DOM
var $main = document.querySelector('.main');

/*
var $mainContent = document.querySelector('.main-content');
var $mainHeader = document.querySelector('.main-header');
var $mainFooter = document.querySelector('.main-footer');
var $firstText = $mainContent.firstChild;
console.log('First', $firstText);


console.log($mainContent.parentNode);
console.log($mainContent.childNodes); // → espaços contam
console.log($mainContent.lastChild);
console.log($mainContent.nextSibling);
console.log($mainContent.previousSibling);
console.log($mainContent.nodeType);
console.log($mainContent.firstChild.nodeValue);
console.log($mainContent.firstChild.nextSibling.nodeValue);
console.log($mainContent.nodeName);
console.log($mainContent.children);
console.log($mainContent.firstElementChild);
console.log($mainContent.lastElementChild);
console.log($mainContent.hasAttribute('data-js'));
// get elements
// console.log($mainContent.appendChild($mainHeader));//aparece no final
console.log($mainContent.insertBefore($mainFooter, $firstText));
var $cloneMainHeader = $mainHeader.cloneNode(true);
$mainContent.appendChild($cloneMainHeader);
console.log(document.querySelectorAll('.main-header').length);

var $h1 = $mainHeader.firstElementChild;
console.log($h1.hasChildNodes()); // return true

$mainHeader.removeChild($h1);

// $main.replaceChild($mainHeader, $mainFooter);

var newTextNode = document.createTextNode('Ihuu!')
$main.appendChild(newTextNode);

var $newP = document.createElement('p');
$newP.appendChild(newTextNode);
$main.appendChild($newP);
console.log($newP);
*/



// Manipular elementos;
console.log($main.className); //getter
console.log($main.className = 'coisa'); // setter
console.log($main.getAttribute('class'));
console.log(+$main.getAttribute('data-number1')+ +$main.getAttribute('data-number2'));
console.log(parseFloat($main.getAttribute('data-number1')) + parseFloat($main.getAttribute('data-number2')));
console.log(+$main.setAttribute('data-js', 'main-datajs'));














})();
