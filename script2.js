/*Created on 07.10.2015.*/


var i = 0;

var addTodo = function () {
    var newTodo = document.createElement("li");     //создаем элемент списка li
    var label = document.createElement("label");    //создаем label, где будет храниться текст юзера
    var checkbox = document.createElement("input");     //создаем checkbox
    checkbox.setAttribute('type', 'checkbox');          //Setting 'type' attribute with 'checkbox' value

    var checkboxId = 'checkbox_' + i++;                 //
    checkbox.setAttribute('id', checkboxId);            //
    label.setAttribute('for', checkboxId);              //

    checkbox.addEventListener('click', function() {        //задаем функцию Event Listener
        handleCheckboxChange(this);                        //
    });

    var textBox = document.getElementById('textBox');     //получаем textBox
    label.textContent = textBox.value;                       //меняем содержимое. Можем написать inner HTML

    newTodo.appendChild(label);                                //присоединяем к li текст юзера в label
    newTodo.appendChild(checkbox);                             //присоединяем к li checkbox

    var todoList = document.getElementById('todoList');        //получаем весь todoList список
    todoList.appendChild(newTodo);                             //присоединяем новый элемент списка ко всему списку
    textBox.value = "";                                     //переопределяем значение поля ввода textBox на пустое
};

var handleKeyPress = function(event) {
  if(event.keyCode == 13) {
      addTodo()
  }
};

var handleCheckboxChange = function(checkbox) {        //Event Handler для checkbox
    var li = checkbox.parentNode;                   //задаем li как Родительский узел -- зачем?
    if(checkbox.checked == true) {                  //Условие зачеркивания
        li.className = 'line-through';              //Присвоение класса с зачеркиванием элементу
    } else li.className = '';                       //Или нет
};

