
var element = document.createElement('h1');
element.className = 'testhead text-center';
element.innerHTML ='Тест по программированию';

var parentElement = document.body;
parentElement.appendChild(element);

element = document.createElement('div');
element.className = 'col-md-6 col-md-offset-3';
parentElement.appendChild(element);


for (var n = 1; n < 4; n++) {

  element = document.createElement('h4');
  element.className = 'question';
  element.innerHTML = n + '. Вопрос № ' + n;
  parentElement = document.querySelector('.col-md-6');
  parentElement.appendChild(element);

  for (var i = 1; i < 4; i++) {

    element = document.createElement('div');
    element.className = 'checkbox';
    parentElement = document.querySelector('.col-md-6');
    parentElement.appendChild(element);

    element = document.createElement('input');
    element.type = 'checkbox';
    element.id = 'check_id' + n + i;
    element.className = 'question__checkbox';
    parentElement = document.querySelectorAll('.checkbox');
    parentElement[parentElement.length-1].appendChild(element);

    element = document.createElement('label'); 
    element.htmlFor = 'check_id' + n + i;
    element.innerHTML = 'Вариант ответа № ' + i;
    parentElement[parentElement.length-1].appendChild(element);

  }

}

parentElement = document.querySelector('.col-md-6');
element = document.createElement('div');
element.className = 'text-center';
parentElement.appendChild(element);

element = document.createElement('input');
element.type = 'submit';
element.className = 'question__submit';
element.value = 'Проверить мои результаты';
parentElement = document.querySelectorAll('.text-center');
parentElement[parentElement.length-1].appendChild(element);




  

