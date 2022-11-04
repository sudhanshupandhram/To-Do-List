const inputField = document.querySelector('#inputField');
const addButton = document.querySelector('#addToDo');
const toDoContainer = document.querySelector('#toDoContainer');


addButton.addEventListener('click', () => {
    if (inputField.value.trim().length == '')
        return;

    const toDoItems = document.createElement('div');
    toDoItems.classList.add('toDoItems');
    toDoContainer.appendChild(toDoItems);

    const todoText = document.createElement('p');
    todoText.id = 'todo-text';
    todoText.innerText = inputField.value;
    toDoItems.appendChild(todoText);

    todoText.addEventListener('click', ()=>{
        todoText.classList.add('line-through');
        editButton.setAttribute("disabled","disabled");
    })

    const strikethrough = document.createElement('button');
    strikethrough.id = 'strikethrough';
    const stImage = document.createElement('img');
    stImage.src = 'strikethrough.svg';
    strikethrough.appendChild(stImage);
    toDoItems.appendChild(strikethrough);

    strikethrough.addEventListener('click', ()=>{
        
        const parent = strikethrough.parentElement;
        parent.parentElement.removeChild(parent);
    });


    const editButton = document.createElement('button');
    editButton.id = 'edit';
    const editImage = document.createElement('img');
    editImage.src = 'edit.svg';
    editButton.appendChild(editImage);
    toDoItems.appendChild(editButton);
    editButton.addEventListener('click', ()=>{
        inputField.value=todoText.innerText;
        const parent = editButton.parentElement;
        parent.parentElement.removeChild(parent);
    });

    


    const deleteButton = document.createElement('button');
    deleteButton.id = 'delete';
    const deleteImage = document.createElement('img');
    deleteImage.src = 'delete.svg';
    deleteButton.appendChild(deleteImage);
    toDoItems.appendChild(deleteButton);

    deleteButton.addEventListener('click', ()=>{
        const parent =deleteButton.parentElement;
        parent.parentElement.removeChild(parent);
    });



    inputField.value = '';
});