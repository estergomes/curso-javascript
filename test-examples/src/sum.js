'use strict';
function sum(num1, num2){

  if(isEmpty(num1) || isEmpty(num2)) {
    return new Error('Pass the number');
  }

  if(isNumber(num1) || isNumber(num2)){
    return new Error('Para must be ser numbers');
  }
  return num1+num2;
}

function isEmpty(arg){
  return !arg;
}

function isNumber(){
  return Object.prototype.toString.call(arg) === '[object Number]';
}

module.exports = sum;