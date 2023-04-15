const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const completedTaskList = document.getElementById("completedTaskList");

function addTask() {
	const task = taskInput.value.trim();
	if (task === "") return;
	taskInput.value = "";

	const li = document.createElement("li");
	li.innerHTML = `<span>${task}</span><button type="button" onclick="completeTask(this)">Complete</button>`;
	taskList.appendChild(li);
}

function completeTask(button) {
	const li = button.parentNode;
	li.removeChild(button);
	li.classList.add("completed");
	completedTaskList.appendChild(li);
}
