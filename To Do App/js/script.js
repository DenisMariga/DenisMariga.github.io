function currentTime() {
    var date = new Date(); /* creating object of Date class */
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerText =
        hour + " : " + min + " : " + sec; /* adding time to the div */
    var t = setTimeout(function() {
        currentTime();
    }, 1000); /* setting timer */
}

function updateTime(k) {
    if (k < 10) {
        return "0" + k;
    } else {
        return k;
    }
}

currentTime(); /* calling currentTime() function to initiate the process */

// dom variables
const form = document.querySelector("form");
const taskInput = document.querySelector("#task-input");
const ul = document.querySelector(".collection");
const clearTasks = document.querySelector(".clearBtn");
const searchi = document.querySelector("#search");

loadalleventlisteners();

function loadalleventlisteners() {
    // add tasks
    form.addEventListener("submit", addTask);
    //delete tasks
    ul.addEventListener("click", deleteTask);
    //clear tasks
    clearTasks.addEventListener("click", clearTask);
    //search task
    searchi.addEventListener("keyup", searchTask);
}

function addTask(e) {
    if (taskInput.value == "") {
        alert("Please add task");
        return 0;
    }
    const div = document.createElement("div");
    div.setAttribute("class", "task");
    const li = document.createElement("li");
    li.className = "collection-item";
    li.appendChild(document.createTextNode(taskInput.value));
    deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete"));
    deleteBtn.className = "btn secondary-content danger";
    div.appendChild(li);
    div.appendChild(deleteBtn);
    ul.appendChild(div);
    taskInput.value = "";
    e.preventDefault();
}

function deleteTask(e) {
    if (e.target.classList.contains("danger")) {
        if (confirm("Are you sure")) {
            e.target.parentElement.remove();
        }
    }
}

function clearTask() {
    if (confirm("Are you sure")) {
        ul.innerHTML = "";
    }
}

function searchTask(e) {
    const text = e.target.value.toLowerCase();
    const li = document.querySelectorAll(".collection-item");
    li.forEach(function(task) {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = "block";
        } else {
            task.style.display = "none";
        }
    });
}