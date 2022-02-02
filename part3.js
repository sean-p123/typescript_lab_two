var ToDo = /** @class */ (function () {
    function ToDo() {
        this.tasks = [];
    }
    ToDo.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("Item: " + task + " has been added to Tasks.");
        return this.tasks.length;
    };
    ToDo.prototype.listAllTasks = function () {
        this.tasks.forEach(function (item) {
            console.log(item);
        });
    };
    ToDo.prototype.deleteTask = function (task) {
        var index = this.tasks.indexOf(task);
        if (index > -1) {
            this.tasks.splice(index, 1);
            console.log("Task: " + task + " deleted from Tasks.");
        }
        else {
            console.log("Item: " + task + " is not in tasks.");
        }
        return this.tasks.length;
    };
    return ToDo;
}());
var myToDo = new ToDo();
myToDo.addTask("Q1");
myToDo.addTask("Q2");
myToDo.listAllTasks();
myToDo.deleteTask("Q1");
myToDo.deleteTask("Q2");
myToDo.listAllTasks();
