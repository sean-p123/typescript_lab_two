import {myInterface} from './interface';
class ToDo implements myInterface{

    tasks:Array<string>=[];
    
addTask(task:string):number{

        this.tasks.push(task);
    console.log("Item: "+task+" has been added to Tasks.");
        return this.tasks.length;
    }
listAllTasks():void{
        this.tasks.forEach(function(item){
            console.log(item);
        })
    }
deleteTask(task:string):number{
       
        let index:number = this.tasks.indexOf(task);
    if(index > -1){
    this.tasks.splice(index,1);
    console.log("Task: "+task+ " deleted from Tasks.");
    }else
    {
        console.log("Item: "+task+" is not in tasks.");
    }
    return this.tasks.length;
    }
}
let myToDo = new ToDo();
myToDo.addTask("Q1");
myToDo.addTask("Q2");
myToDo.listAllTasks();

myToDo.deleteTask("Q1");
myToDo.deleteTask("Q2");
myToDo.listAllTasks();
