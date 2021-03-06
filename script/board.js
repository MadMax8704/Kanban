let userStories = [];
let currentDraggedElement;
let pathUser;

function renderHTML() {
    filterToDoTask();
    filterProgressTask();
    filterTestingTask();
    filterDoneTask();
}

function filterToDoTask() {
    let array = userStories.filter(t => t['taskTypology'] == 'toDoTask');
    let toDoTask = document.getElementById('toDoTask');
    toDoTask.innerHTML = ''; 
    for (let i = 0; i < array.length; i++) {
        renderTaskTypology(toDoTask, i, array);
        colorUserStory(i, array);          
    }
}

function filterProgressTask() {
    let array = userStories.filter(t => t['taskTypology'] == 'progressTask');
    let progressTask = document.getElementById('progressTask');
    progressTask.innerHTML = ''; 
    for (let i = 0; i < array.length; i++) {
        renderTaskTypology(progressTask, i, array);
        colorUserStory(i, array);          
    }
}

function filterTestingTask() {
    let array = userStories.filter(t => t['taskTypology'] == 'testingTask');
    let testingTask = document.getElementById('testingTask');
    testingTask.innerHTML = ''; 
    for (let i = 0; i < array.length; i++) {
        renderTaskTypology(testingTask, i, array);
        colorUserStory(i, array);          
    }
}

function filterDoneTask() {
    let array = userStories.filter(t => t['taskTypology'] == 'doneTask');
    let doneTask = document.getElementById('doneTask');
    doneTask.innerHTML = ''; 
    for (let i = 0; i < array.length; i++) {
        renderTaskTypology(doneTask, i, array);
        colorUserStory(i, array);          
    }
}

function renderTaskTypology(taskTypology, i, array) {
    let id = array[i]['id'];
    let title = array[i]['title'];
    let dueDate = array[i]['dueDate'];
    let category = array[i]['category'];
    let collaborators = array[i]['assignedTo'];
    taskTypology.innerHTML += 
    `<div draggable="true" ondragstart="startDragging(${id})" class = "user-story" id="userStory${id}">
    <strong>${title}</strong> <span>${dueDate}</span>
    <p>${category}</p>
    <p>${collaborators}</p>
    <p style:"cursor:pointer" onclick="deleteUserStory(${id})">DELETE</p>
    </div>
    `;
}

function colorUserStory(i, array) {
    let id = array[i]['id'];
    let urgency = array[i]['urgency'];
    let card = document.getElementById(`userStory${id}`);
    if(urgency == 'High'){
        card.style = 'background-color: rgba(200, 23, 23, 1);'
    } else if(urgency == 'Intermediate'){
        card.style = 'background-color: yellow;'
    } else {
        card.style = 'background-color: rgba(23, 200, 23, 1);'
    }
}

function addBoard(i) {
    let card = {
        'id': '',
        'taskTypology': '',
        'title': '',
        'dueDate': '',
        'category': '',
        'assignedTo': '',
        'urgency': '',
        'createDats': '',
        'description': ''
    };
    card['id'] = allTasks[i].id;
    card['title'] = allTasks[i].title;
    card['dueDate'] = allTasks[i].dueDate;
    card['category'] = allTasks[i].category;
    card['assignedTo'] = allTasks[i].assignedTo;
    card['urgency'] = allTasks[i].urgency;
    card['createDat'] = allTasks[i].createdAt;
    card['description'] = allTasks[i].description;
    card['taskTypology'] = 'toDoTask';
    userStories.push(card);
    saveUserStory();
}

// ##### SPEICHERN IM BACKEND: #####

setURL('http://gruppe-252.developerakademie.net/smallest_backend_ever');

function saveUserStory() {
    let userStoriesString = JSON.stringify(userStories);
    backend.setItem('userStories', userStoriesString);
    console.log('userStories: ', userStories, ' userStoriesString: ', userStoriesString);
}

// ##### LADEN AUS DEM BACKEND: #####

async function loadUserStory() {
    await downloadFromServer();
    userStories = JSON.parse(backend.getItem('userStories')) || [];
}

function startDragging(id) {
    currentDraggedElement = id;
}


function allowDrop(ev) {
    ev.preventDefault();
}

function moveTo(taskTypology) {
    let array = userStories.filter(t => t['id'] == currentDraggedElement);
    array[0]['taskTypology'] = taskTypology;
    saveUserStory();
    renderHTML();
}

function deleteUserStory(id) {
    let array = userStories.filter(t => t['id'] == id);
    let index = userStories.indexOf(array[0]);
    userStories.splice(index, 1);
    console.log('array: ', array, ' index: ', index);
    saveUserStory();
    renderHTML();
}

// function transferUserImage() {
//     let string = parent.document.URL.substring(parent.document.URL.indexOf('?'), parent.document.URL.length);
//     pathUser = string.slice(1);
//     document.getElementById('user_img').src = pathUser;
//     backend.setItem('pathUser', pathUser);
// }


