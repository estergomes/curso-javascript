(function(){
  'use strict'
  function DOM(elements){
    this.element = document.querySelectorAll(elements);
  }

  // criando methods
  DOM.prototype.on = function on(eventType, callback){
    Array.prototype.forEach.call(this.element, function(element){
      element.addEventListener(eventType, callback, false);
    });
  };

  DOM.prototype.off = function off(){
    Array.prototype.forEach.call(this.element, function(element){
      element.removeEventListener(eventType, callback, false);
    });
  };

  DOM.prototype.get = function get(){
    return this.element;
  };

  DOM.prototype.forEach = function forEach(){
    return Array.prototype.forEach.apply(this.element, arguments);
  }

  DOM.prototype.map = function map(){
    return Array.prototype.map.apply(this.element, arguments);
  }

  DOM.prototype.filter = function filter(){
    return Array.prototype.filter.apply(this.element, arguments);
  }

  DOM.prototype.reduce = function reduce(){
    return Array.prototype.reduce.apply(this.element, arguments);
  }

  DOM.prototype.reduceRight = function reduceRight(){
    return Array.prototype.reduceRight.apply(this.element, arguments);
  }

  DOM.prototype.every = function every(){
    return Array.prototype.every.apply(this.element, arguments);
  }

  DOM.prototype.some = function some(){
    return Array.prototype.some.apply(this.element, arguments);
  }

  DOM.prototype.isArray = function isArray(param){
    return Object.prototype.toString.call(param) === '[object Array]';
  }

  var $formCep = new DOM('[data-js="form-cep"]');
  var $inputCep = new DOM('[data-js="input-cep"]');
  var $logradouro = new DOM('[data-js="logradouro"]');
  var $bairro = new DOM('[data-js="bairro"]');
  var $estado = new DOM('[data-js="estado"]');
  var $cidade = new DOM('[data-js="cidade"]');
  var $cep = new DOM('[data-js="cep"]');
  var $status = new DOM('[data-js="status"]');

  var ajax = new XMLHttpRequest();
  $formCep.on('submit', handleSubmitFormCEP);

  function handleSubmitFormCEP(event){
    event.preventDefault();
    var url = getUrl();
    console.log(url);
    ajax.open('GET', url);
    ajax.send();
    getMessage('loading');
    ajax.addEventListener('readystatechange', handleReadyStateChange);
  }

  function getUrl(){
    return 'https://viacep.com.br/ws/[CEP]/json'.replace('[CEP]',
    $inputCep.get()[0].value.replace(/\D/g,'')
    );
  }

  function handleReadyStateChange(){
    if(isRequestOk()){
      fillCEPFields();
      getMessage('ok');
    }

  }

  function isRequestOk(){
    return ajax.readyState === 4 && ajax.status === 200;
  }

  function fillCEPFields(){
    var data = parseData();
    if(!data)
      getMessage('error');

    $logradouro.get()[0].textContent = data.logradouro;
    $bairro.get()[0].textContent = data.bairro;
    $estado.get()[0].textContent = data.uf;
    $cidade.get()[0].textContent = data.localidade;
    $cep.get()[0].textContent = data.cep;
  }

  function parseData(){
    var result;
    try{
      result = JSON.parse(ajax.responseText);
    }
    catch(e){
      result = null;
    }
    return result;
  }

  function getMessage(type) {
    var messages = {
      loading: "Buscando informações para o CEP [CEP]...",
      ok: "Endereço referente ao CEP [CEP]:",
      error: "Não encontramos o endereço para o CEP [CEP]."
    };

    $status.get()[0].textContent = messages[type];
  }
})();
