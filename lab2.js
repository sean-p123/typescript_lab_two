var tasks = [];
function AddTask(task) {
    tasks.push(task);
    console.log("Item: " + task + " has been added to Tasks.");
    return tasks.length;
}
function listAllTasks() {
    tasks.forEach(function (item) {
        console.log(item);
    });
}
function deleteTask(task) {
    var index = tasks.indexOf(task);
    if (index > -1) {
        tasks.splice(index, 1);
        console.log("Task: " + task + " deleted from Tasks.");
    }
    else {
        console.log("Item: " + task + " is not in tasks.");
    }
    return tasks.length;
}
AddTask("Part A");
AddTask("Part B");
listAllTasks();
deleteTask("Part B");
deleteTask("Part A");
deleteTask("Part 5");
