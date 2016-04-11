/**
 * Created by ������ on 20.10.2015.
 */
var i = 0;

var addTodo = function () {
    var newTodo = $("li")[0];
    console.log(newTodo);
    var label = $("label")[0];    //������� label, ��� ����� ��������� ����� �����
    var checkbox = $("input")[0];     //������� checkbox
    checkbox.setAttribute('type', 'checkbox');          //Setting 'type' attribute with 'checkbox' value

    var checkboxId = 'checkbox_' + i++;                 //
    checkbox.setAttribute('id', checkboxId);            //
    label.setAttribute('for', checkboxId);              //

    checkbox.addEventListener('click', function() {        //������ ������� Event Listener
        handleCheckboxChange(this);                        //
    });


    var textBox = $('#textBox')[0];     //�������� textBox
    label.textContent = textBox.value;                       //������ ����������. ����� �������� inner HTML

    newTodo.appendChild(label);                                //������������ � li ����� ����� � label
    newTodo.appendChild(checkbox);                             //������������ � li checkbox

    var todoList = $('#todoList')[0];        //�������� ���� todoList ������
    todoList.appendChild(newTodo);                             //������������ ����� ������� ������ �� ����� ������
    textBox.value = "";                                     //�������������� �������� ���� ����� textBox �� ������
};

var handleKeyPress = function(event) {
    if(event.keyCode == 13) {
        addTodo()
    }
};

var handleCheckboxChange = function(checkbox) {        //Event Handler ��� checkbox
    var li = checkbox.parentNode;                   //������ li ��� ������������ ���� -- �����?
    if(checkbox.checked == true) {                  //������� ������������
        li.className = 'line-through';              //���������� ������ � ������������� ��������
    } else li.className = '';                       //��� ���
};


