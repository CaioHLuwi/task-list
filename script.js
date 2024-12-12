let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let taskProperty = '';

function addTask(title, date, description, priority) {

    const newTask = {
        title: title,
        date: date,
        description: description,
        priority: priority,
    }

    tasks.push(newTask);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function setProperty(taskProperty) {
    console.log(taskProperty);
    return taskProperty;
}

function getProperty(e) {
    let property = e.target.value;
    taskProperty = setProperty(property);
}

function sendTask() {
    let taskTitle = document.querySelector('#task-field-name').value;
    let taskDate = document.querySelector('#task-field-date').value;
    let taskDescription = document.querySelector('#task-field-notes').value;

    if (taskTitle != '' && taskDate != '' && taskDescription != '') {
        addTask(taskTitle, taskDate, taskDescription, taskProperty);
    } else {
        console.log('Preencha todos os campos e selecione uma prioridade.');
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
    let loading = document.querySelector('.loading');
    if(tasks != '') {
        loading.style.display = 'none';
        Object.keys(tasks).forEach((task)=> {
            let taskItem = createElement('div', 'task-item');
    
            let taskDone = createElement('div', 'task-done');
    
            taskDone.innerHTML = "<button class='task-check'> Concluir tarefa </button>";
    
            let taskInfo = createElement('div', 'task-info')
    
            let taskTitle = createElement('div', 'task-title');
            taskTitle.innerHTML = (tasks[task].priority == 'High') ? `!!! <span class='title'> ${tasks[task].title} </span>` : (tasks[task].priority == 'Medium') ? `!! <span class='title'> ${tasks[task].title} </span>` : `! <span class='title'> ${tasks[task].title} </span>` ;
    
            let taskDescription = createElement('div', 'task-description');
            taskDescription.textContent = `Notes: ${tasks[task].description}`;
    
            let taskDate = createElement('div', 'task-date');
            taskDate.textContent = `Date: ${tasks[task].date}`;
    
            // let taskPriority = createElement('div', 'task-date');
            // taskPriority.textContent = (tasks[task].priority == 'High') ? task;
        
            addedArea.appendChild(taskItem);
            taskItem.appendChild(taskInfo);
            taskInfo.appendChild(taskTitle);
            taskInfo.appendChild(taskDescription)
            taskInfo.appendChild(taskDate);
            taskItem.appendChild(taskDone);
            // taskInfo.appendChild(taskPriority);
        })
    } else {
        loading.style.display = 'block';
    }
}

function concludesTask(titleToConclude) {
    let checkButtons = document.querySelectorAll('.task-check');

    checkButtons.forEach(check => {
        check.addEventListener('click', (e) => {
            for(let i = 0; i < tasks.length; i++) {
                let items = tasks[i];

                let clickedButton = e.target;
                let titleOfTheElement = clickedButton.parentElement
                .parentElement.querySelector('.task-title .title').innerHTML;
                let fixTitle = titleOfTheElement.trim();
                if(items.title.trim() == fixTitle) {
                    tasks.splice(i, 1);
                }
            }
            localStorage.setItem('tasks', JSON.stringify(tasks));
            location.reload();
        })
    })
}

getTask();
concludesTask('Task teste');
// REMOVER TAREFA DE ALGUMA FORMA