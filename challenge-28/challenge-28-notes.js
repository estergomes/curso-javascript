// Notes AJAX - cap. 28

var ajax = new XMLHttpRequest();
ajax.open('GET','./data/data.json');
ajax.send();


ajax.addEventListener('readystatechange', function(){
  if(isRequestOk()){
    var data = JSON.parse(ajax.responseText);
    console.log('ok', data.message);
    try {
      throw new Error('Errou');
    }
    catch(e){
      console.log(e);
    }
  }
},false);

function isRequestOk(){
  return ajax.readyState === 4 && ajax.status ===200;
}

// ajax.status
