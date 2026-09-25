
let input = document.querySelector("#taskInput");
let addBtn = document.querySelector("#addBtn");
let taskList = document.querySelector("#taskList");

addBtn.addEventListener("click", function () {

    let task = input.value;

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    li.innerText = task;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    input.value = "";
});
