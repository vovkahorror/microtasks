import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

export type TodolistsType = {
    id: string;
    title: string;
    filter: FilterValuesType;
}

function AppTodoList() {
    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<Array<TodolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ]);

    let [tasks, setTasks] = useState({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ],
    });


    function removeTask(todoListID: string, id: string) {
        setTasks({...tasks, [todoListID]: tasks[todoListID].filter(t => t.id != id)});
    }

    function addTask(todoListID: string, title: string) {
        const newTask = {id: v1(), title: title, isDone: false};
        setTasks({...tasks, [todoListID]: [newTask, ...tasks[todoListID]]});
    }

    function changeStatus(todoListID: string, taskId: string, isDone: boolean) {
        setTasks({...tasks, [todoListID]: tasks[todoListID].map(el => el.id === taskId ? {...el, isDone} : el)});
    }

    function changeFilter(todoListID: string, value: FilterValuesType) {
        setTodolists(todolists.map(filtered => filtered.id === todoListID ? {...filtered, filter: value} : filtered));
    }

    const todoListsRender = todolists.map(mapTodoLists => {
        let tasksForTodolist = tasks[mapTodoLists.id];

        if (mapTodoLists.filter === "active") {
            tasksForTodolist = tasks[mapTodoLists.id].filter(t => t.isDone === false);
        }
        if (mapTodoLists.filter === "completed") {
            tasksForTodolist = tasks[mapTodoLists.id].filter(t => t.isDone === true);
        }

        return (
            <Todolist
                key={mapTodoLists.id}
                todoListID={mapTodoLists.id}
                title={mapTodoLists.title}
                tasks={tasksForTodolist}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
                changeTaskStatus={changeStatus}
                filter={mapTodoLists.filter}
            />
        );
    });

    return (
        <div className="App">
            {todoListsRender}
        </div>
    );
}

export default AppTodoList;
