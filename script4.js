var i = 0;

var addTodo = function () {

    var newTodo = $("<li>")[0];
    var $label = $("<label>");
    var $checkbox = $("<input>");
    $checkbox.attr('type', 'checkbox');

    var checkboxId = 'checkbox_' + i++;
    $checkbox.attr('id', checkboxId);
    $label.attr('for', checkboxId);

    $checkbox.on('click', function() {
        handleCheckboxChange(this);
    });

    var $textBox = $('#textBox');
    $label[0].textContent = $textBox[0].value;

    newTodo.appendChild($label[0]);
    newTodo.appendChild($checkbox[0]);

    var todoList = document.getElementById('todoList');
    todoList.appendChild(newTodo);
    $textBox.val("");
};

var handleKeyPress = function(event) {
    if(event.keyCode == 13) {
        addTodo()
    }
};

var handleCheckboxChange = function(checkbox) {
    var li = checkbox.parentNode;
    if(checkbox.checked == true) {
        li.className = 'line-through';
    } else li.className = '';
};

