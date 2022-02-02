

let tasks:Array<string> = [];

function AddTask(task:string):number
{
tasks.push(task);
console.log("Item: "+task+" has been added to Tasks.");
return tasks.length;
}


function listAllTasks():void{
    tasks.forEach(function(item){
        console.log(item);
    })
}

function deleteTask(task:string):number{

    let index:number = tasks.indexOf(task);
    if(index > -1){
    tasks.splice(index,1);
    console.log("Task: "+task+ " deleted from Tasks.");
    }else{
        console.log("Item: "+task+" is not in tasks.");
    }
    return tasks.length;
}
AddTask("Part A");
AddTask("Part B");

listAllTasks();

deleteTask("Part B");
deleteTask("Part A");
deleteTask("Part 5");

