//Selectors
const taskInput = document.querySelector(".task-input")
const taskList = document.querySelector(".task-items")



//Event Listeners

taskInput.addEventListener("keypress", function(event){
    if(event.key === "Enter") {
        event.preventDefault();
        addTask();
    }
})

taskList.addEventListener("click", clickChk)



//Functions

function addTask(event){
    //Create a Task Item DIV
    const taskDiv = document.createElement("div")
    taskDiv.classList.add("task-item")
    
    //Create a checkbox
    const taskChk = document.createElement("input")
    taskChk.classList.add("task-check")
    taskChk.type = "checkbox";
    
    //Create a label
    const taskText = document.createElement("label")
    taskText.classList.add("task-name")
    taskText.innerText = `${taskInput.value}`

    //Create Delete button
    const taskDel = document.createElement("button")
    taskDel.classList.add("task-delete")
    
    //Add Elements
    taskList.appendChild(taskDiv)
    taskDiv.appendChild(taskChk)
    taskDiv.appendChild(taskText)
    taskDiv.appendChild(taskDel)

    //Clear Input
    taskInput.value = "";
}

function clickChk(e){

    //Delete Element
    const taskItem = e.target;
    if (taskItem.classList[0] === "task-delete"){
        const deleteItem = taskItem.parentElement;
        deleteItem.remove();
    }

    //Completed Element
    if (taskItem.classList[0] === "task-check"){
        const completed = taskItem.parentElement;
        completed.classList.toggle("completed");
    }
}




