// Notes
var fragment = document.createDocumentFragment();
var childP = document.createElement('p');
var textChildP = document.createTextNode('Texto da tag P');

childP.appendChild(textChildP);
fragment.appendChild(childP);

document.body.appendChild(fragment);
