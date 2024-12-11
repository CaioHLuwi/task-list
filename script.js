let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
function addTask(title, date, description) {
    const newTask = {
        title: title,
        date: date,
        description: description
    }

    tasks.push(newTask);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}


function sendTask(e) {
    let taskTitle = document.querySelector('#task-field-name').value;
    let taskDate = document.querySelector('#task-field-date').value;
    let taskDescription = document.querySelector('textarea').value;

    if(taskTitle != '' && taskDate != '' && taskDescription != '') {
        addTask(taskTitle, taskDate, taskDescription);
    } else {
        console.log('Preencha os campos.')
    }
}

function createElement(element, classe, data){
    let elementCreated = document.createElement(element);
    elementCreated.classList.add(classe);
    elementCreated.textContent = data;
    return elementCreated;
}

function getTask() {
    let addedArea = document.querySelector('#task-added-area');
    Object.keys(tasks).forEach((task)=> {
        let taskItem = createElement('div', 'task-item');

        let taskDone = createElement('div', 'task-done');

        taskDone.innerHTML = '<i class="fa-regular fa-circle-check"></i>';

        let taskInfo = createElement('div', 'task-info')

        let taskTitle = createElement('div', 'task-title');
        taskTitle.textContent = tasks[task].title;

        let taskDescription = createElement('div', 'task-description');
        taskDescription.textContent = tasks[task].description;

        let taskDate = createElement('div', 'task-date');
        taskDate.textContent = tasks[task].date;
    
        addedArea.appendChild(taskItem);
        taskItem.appendChild(taskDone);
        taskItem.appendChild(taskInfo);
        taskInfo.appendChild(taskTitle);
        taskInfo.appendChild(taskDescription)
        taskInfo.appendChild(taskDate);
    })
}

getTask();

// TO DO
// AO CLICAR NO CHECK ELE MUDA O ÍCONE, COLOCA UMA COR VERDE E APAGA DO LOCALSTORAGE.
// REMOVER TAREFA DE ALGUMA FORMA