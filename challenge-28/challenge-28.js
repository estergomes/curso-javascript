(function(DOM){
  'use strict';

  function app(){
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
      return replaceCEP('https://viacep.com.br/ws/[CEP]/json');
    }

    function clearCEP(){
      return $inputCep.get()[0].value.replace(/\D/g,'') ;
    }
    function handleReadyStateChange(){
      if(isRequestOk()){
        getMessage('ok');
        fillCEPFields();
      }
    }

    function isRequestOk(){
      return ajax.readyState === 4 && ajax.status === 200;
    }

    function fillCEPFields(){
      var data = parseData();
      if(!data){
        getMessage('error');
        data = clearData();
        return;
      }
      $logradouro.get()[0].textContent = data.logradouro;
      $bairro.get()[0].textContent = data.bairro;
      $estado.get()[0].textContent = data.uf;
      $cidade.get()[0].textContent = data.localidade;
      $cep.get()[0].textContent = data.cep;
    }

    function clearData(){
      return {
        logradouro: '-',
        bairro: '-',
        uf: '-',
        localidade: '-',
        cep: '-'
      }
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
        loading: replaceCEP("Buscando informações para o CEP [CEP]..."),
        ok: replaceCEP("Endereço referente ao CEP [CEP]:"),
        error: replaceCEP("Não encontramos o endereço para o CEP [CEP].")
      };

      $status.get()[0].textContent = messages[type];
    }

    function replaceCEP(message){
      var cep = clearCEP();
      return message.replace('[CEP]', cep);
    }

  }
  app().init();

})(window.DOM);
