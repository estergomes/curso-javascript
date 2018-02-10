
# NOTE - JavaScript Ninja

###  DOM - Seção 20
1. Selecionando elementos      
  - var $input -> para buscar elementos do DOM
    
        → getElementsByTagName()
        $inputs = document.getElementsByTagName('input')
        // (2) [input, input]
        $inputs.length
        // 2
        → querySelectorAll() e querySelector()
        $inputs = document.querySelectorAll('input')
        // (2) [input, input]
        $inputs = document.querySelectorAll('[type=text]')
        var $inputUsername = document.querySelector('#username');
    
- addEventListener
  
      var $button = document.querySelector('#button');
      $button.addEventListener('click', function(event){
        event.preventDefault();
        console.log('Click button')
      }, false);
  
      $inputUsername.addEventListener('click', function(){
        alert('input click');
      }, false);
      */
    
2. Get values in Forms
3. 