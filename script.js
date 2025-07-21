function addTask() {
    const taskText = document.getElementById("newTask").value;
    const li = document.createElement("li");

    const task = document.createTextNode(taskText);
    li.appendChild(task);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete");
    deleteButton.onclick = function () {
        li.remove();
    };

    li.appendChild(deleteButton);
    li.onclick = function () {
        li.classList.toggle("done");
    };

    document.getElementById("taskList").appendChild(li);
    document.getElementById("newTask").value = '';
}
