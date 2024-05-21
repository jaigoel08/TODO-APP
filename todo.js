let todoList= [
    {
        item:'Buy Milk', 
        dueDate:'2024-6-25'
}, 
    {item:'go to collge',
     dueDate:'2024-5-25'
}
];
displayItems();

function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    todoList.push({item: todoItem, dueDate: todoDate});
    inputElement.value='';
    dateElement.value='';
    displayItems();
}

function displayItems() {
    let containerElement=document.querySelector('.todo-container');
    let newHtml='';
 
    for(let i=0; i<todoList.length; i++) {
        let {item, dueDate} = todoList[i];
          let todoItem= todoList[i].item;
          let todoDate=todoList[i].dueDate
        newHtml+=`
       <span>${item}</span>
        <span>${dueDate}</span>
        <button class="btn-delete" onclick="todoList.splice(${i}, 1);
        displayItems();">Delete</button>
         `;
       containerElement.innerHTML = newHtml;
    }
}