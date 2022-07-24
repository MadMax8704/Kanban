let id;
let title;
let dueDate;
let category;
let collaborators;
let currentDraggedElement;


/**
 * This function filters the elements of the array with attribute "position" set under "board".
 * The sub-array is rendered in four different columns depending on whether the state is regulate to "toDotask", 
 * "progressTask", "testingTask" and "doneTask".
 */
function renderHTML() {
    let boardArray = allTasks.filter(t => t['position'] == 'board');
    filterToDoTask(boardArray);
    filterProgressTask(boardArray);
    filterTestingTask(boardArray);
    filterDoneTask(boardArray);
}

/**
 * Cards are generated in the column "to Do". A new array is generated when the state is set to "toDoTask".
 * @param {array} boardArray - it is the sub-array generated from the main array "allTasks", when the attribute state is set to "board". 
 */
function filterToDoTask(boardArray) {
    let array = boardArray.filter(t => t['state'] == 'toDoTask');
    let toDoTask = document.getElementById('toDoTask');
    toDoTask.innerHTML = ''; 
    for (let i = 0; i < array.length; i++) {
        renderTaskTypology(toDoTask, i, array);
        colorUserStory(i, array);          
    }
}

/**
 * Cards are generated in the column "In progress". A new array is generated when the state is set to "progressTask".
 * @param {array} boardArray - it is the sub-array generated from the main array "allTasks", when the attribute state is set to "board". 
 */
function filterProgressTask(boardArray) {
    let array = boardArray.filter(t => t['state'] == 'progressTask');
    let progressTask = document.getElementById('progressTask');
    progressTask.innerHTML = ''; 
    for (let i = 0; i < array.length; i++) {
        renderTaskTypology(progressTask, i, array);
        colorUserStory(i, array);          
    }
}

/**
 * Cards are generated in the column "testing". A new array is generated when the state is set to "testingtask".
 * @param {array} boardArray - it is the sub-array generated from the main array "allTasks", when the attribute state is set to "board". 
 */
function filterTestingTask(boardArray) {
    let array = boardArray.filter(t => t['state'] == 'testingTask');
    let testingTask = document.getElementById('testingTask');
    testingTask.innerHTML = ''; 
    for (let i = 0; i < array.length; i++) {
        renderTaskTypology(testingTask, i, array);
        colorUserStory(i, array);          
    }
}

/**
 * Cards are generated in the column "done". A new array is generated when the state is set to "doneTask".
 * @param {array} boardArray - it is the sub-array generated from the main array "allTasks", when the attribute state is set to "board". 
 */
function filterDoneTask(boardArray) {
    let array = boardArray.filter(t => t['state'] == 'doneTask');
    let doneTask = document.getElementById('doneTask');
    doneTask.innerHTML = ''; 
    for (let i = 0; i < array.length; i++) {
        renderTaskTypology(doneTask, i, array);
        colorUserStory(i, array);          
    }
}

/**
 * For each of the four generated array: toDo column, inProgress column, testing column and done column. A card is compiled with the informations
 * from the objects inside the array. The informations are: id, title, dueDate, category and collaborators.
 * @param {string} taskTypology - It is the id of the div (the column) where the cards are rendered. 
 * The four ids are toDoTask, progressTask, testingTask and doneTask
 * @param {number} i - It is the index of the array. 
 * @param {*} array - The sub-array with "position" set to 'board' and the "state" set to the related id.
 */
function renderTaskTypology(taskTypology, i, array) {
    id = array[i]['id'];
    title = array[i]['title'];
    dueDate = array[i]['dueDate'];
    category = array[i]['category'];
    collaborators = array[i]['assignedTo'];
    taskTypology.innerHTML += templateTaskTypology();
    
}

function templateTaskTypology() {
    return `<div draggable="true" ondragstart="startDragging(${id})" class = "user-story" id="userStory${id}">
    <strong>${title}</strong> <span>${dueDate}</span>
    <p>${category}</p>
    <p>${collaborators}</p>
    <p style:"cursor:pointer" onclick="deleteTask(${id})">DELETE</p>
    </div>
    `;
}

/**
 * After that the cards are compiled. They are coloured corresponding whether the urgency is regulated to "high", "intermediate" or "low".
 * @param {number} i - index of the array
 * @param {*} array - The sub-array with "position" set to 'board' and the "state" set to : "toDoTask", "progressTask", "testingTask", "doneTask"
 */
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

/**
 * When a card is dragged, its id is saved in a global variable named "currentDraggedElement".
 * @param {number} id - Number generated with the function (Math.random * 1000). When a new task is constitute.
 */
function startDragging(id) {
    currentDraggedElement = id;
}

function allowDrop(ev) {
    ev.preventDefault();
}

/**
 * When a card is dragged over a column and dropped into it. This column call a function that fabricate a fictitious array with 
 * the id equal to the number saved in the "currentDraggedElement" variable. This array always consist of only one element, because each card
 * always have an unique id.
 * When the element is dropped to the destination its "state" property changes according to the column-id where it is moved. That causes that 
 * the element is immediately rendered in that new column generating the effect of the drag and drop.
 * 
 * @param {string} taskTypology - Id of the div, respresenting the column where the cards are rendered.
 */
function moveTo(taskTypology) {
    let array = allTasks.filter(t => t['id'] == currentDraggedElement);
    array[0]['state'] = taskTypology;
    saveAllTasks();
    renderHTML();
}

/**
 * By clicking the button delete on the card. This card is deleted from the main-array "allTask" according to its unique id.
 * After that the changes are saved in the backend and all the cards are newly rendered, to show the modifications
 * @param {number} id 
 */
function deleteTask(id) {
    let array = allTasks.filter(t => t['id'] == id);
    let index = allTasks.indexOf(array[0]);
    allTasks.splice(index, 1);
    saveAllTasks();
    renderHTML();
} 

