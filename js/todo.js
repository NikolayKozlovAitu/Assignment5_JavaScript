// Task 8
let tasks = [];

let titleInput = document.getElementById("taskTitle");
let descInput = document.getElementById("taskDesc");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

addBtn.onclick = function() {
    let title = titleInput.value;
    let desc = descInput.value;

    if (title === "" || desc === "") {
        alert("Please fill in both fields!");
        return;
    }

    let task = {
        title: title,
        desc: desc,
        completed: false
    };

    tasks.push(task);
    renderTasks();

    titleInput.value = "";
    descInput.value = "";
};

function renderTasks() {
    taskList.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        let div = document.createElement("div");
        div.className = "task-card";

        if (tasks[i].completed) {
            div.classList.add("done");
        }

        let h3 = document.createElement("h3");
        h3.textContent = tasks[i].title;

        let p = document.createElement("p");
        p.textContent = tasks[i].desc;

        let delBtn = document.createElement("button");
        delBtn.textContent = "X";
        delBtn.className = "del-btn";

        delBtn.onclick = function(e) {
            e.stopPropagation();
            tasks.splice(i, 1);
            renderTasks();
        };

        div.onclick = function() {
            tasks[i].completed = !tasks[i].completed;
            renderTasks();
        };

        div.appendChild(delBtn);
        div.appendChild(h3);
        div.appendChild(p);

        taskList.appendChild(div);
    }
}