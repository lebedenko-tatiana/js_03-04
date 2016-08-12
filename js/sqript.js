
var element = document.createElement('h1');
element.className = 'testhead text-center';
element.innerHTML ='Тест по программированию';

var parentElement = document.body;
parentElement.appendChild(element);

element = document.createElement('form');
element.name = 'TestForm'
element.className = 'col-md-6 col-md-offset-3';
parentElement.appendChild(element);


for (var n = 1; n < 4; n++) {

  element = document.createElement('h4');
  element.className = 'question';
  element.innerHTML = n + '. Вопрос № ' + n;
  parentElement = document.querySelector('form');
  parentElement.appendChild(element);

  for (var i = 1; i < 4; i++) {
    
    element = document.createElement('label'); 
    element.className = 'question__label';
    element.style.display = 'block';
    parentElement = document.querySelector('form');
    parentElement.appendChild(element);

    element = document.createElement('input');
    element.type = 'checkbox';
    element.id = 'check_id' + n + i;
    element.className = 'question__checkbox';
    parentElement = document.querySelectorAll('label');
    parentElement[parentElement.length-1].appendChild(element);

    parentElement[parentElement.length-1].appendChild(document.createTextNode('Вариант ответа № ' + i));

  }

}

parentElement = document.querySelector('form');
element = document.createElement('input');
element.type = 'submit';
element.className = 'question__submit center-block';
element.value = 'Проверить мои результаты';
element.style.display = 'block';
parentElement.appendChild(element);
