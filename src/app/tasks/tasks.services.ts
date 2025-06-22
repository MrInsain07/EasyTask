import { newTaskData } from "./task/task.model";
import { Injectable } from "@angular/core";
@Injectable({providedIn:'root'})

export class TasksServices {
    constructor(){
        const tasks=localStorage.getItem('tasks')
        if(tasks){
            this.tasks= JSON.parse(tasks);
        }
    }
    private tasks = [
        {
            id: 't1',
            userId: 'u1',
            title: 'Master Angular 20',
            summary: 'Learn all the basic and Advance feature of Angular & how to apply them.',
            dueDate: '2025-12-31'
        },
        {
            id: 't2',
            userId: 'u3',
            title: 'Build first prototype',
            summary: 'Build a first prototype of the online shop website',
            dueDate: '2024-05-31',
        },
        {
            id: 't3',
            userId: 'u3',
            title: 'Prepare issue template',
            summary:
                'Prepare and describe an issue template which will help with project management',
            dueDate: '2024-06-15',
        },
    ];

    getUsersTask(UserId: string) {
        return this.tasks.filter((x) => x.userId === UserId);
    }
    addTasks(taskdata: newTaskData,UserId:string) {
        this.tasks.push({
            id: new Date().getTime().toLocaleString(),
            userId: UserId,
            title: taskdata.title,
            summary: taskdata.summary,
            dueDate: taskdata.date
        });
        this.saveTasks();
    }
    removeTasks(id:string){
        this.tasks= this.tasks.filter((x)=>x.id !==id)
        this.saveTasks();
    }
    private saveTasks(){
        localStorage.setItem('tasks',JSON.stringify(this.tasks))
    }
}