import TodoItem from "./TodoItem";

import React from 'react';

export default class TodoItemList extends React.Component {

    todoListKey = "todoItems";
    emptyForm = () => ({
        name: '',
        priority: 0
    });

    constructor(props) {
        super(props);
        let savedTodoItems = this.initiateTaskList();
        this.state = {
            todoList: savedTodoItems,
            displayNewTaskForm: false,
            formData: this.emptyForm()
        };
        this.appendTask = this.appendTask.bind(this);
        this.handleFormUpdate = this.handleFormUpdate.bind(this);
    }

    initiateTaskList() {
        let savedItems = localStorage.getItem(this.todoListKey);
        if (savedItems === null || typeof savedItems === undefined) {
            savedItems = [];
        } else {
            savedItems = JSON.parse(localStorage.getItem(this.todoListKey));
        }
        return savedItems;
    }

    appendTask(event) {
        event.preventDefault();
        let currentTasks = this.state.todoList;
        currentTasks.push(this.state.formData);
        localStorage.setItem(this.todoListKey, JSON.stringify(currentTasks));
        this.setState({
            todoList: currentTasks,
            formData: this.emptyForm()
        });
    }

    handleFormUpdate(event) {
        event.preventDefault();
        let form = this.state.formData;
        form[event.target.ariaLabel] = event.target.value;
        this.setState({
            formData: form
        });
    }

    render() {
        let form = <></>;
        if (this.state && this.state.displayNewTaskForm) {
            form = (<form className="input-form" onSubmit={this.appendTask}>
                <br />
                <input type="text" name="name" placeholder="task name" aria-label="name" onChange={(event) => this.handleFormUpdate(event)} value={this.state.formData.name}></input>
                <br /><br />
                <input type="number" name="priority" placeholder="priority" aria-label="priority" step="1" pattern="[0-9]" onChange={(event) => this.handleFormUpdate(event)} value={this.state.formData.priority}></input>
                <br />
                <input type="submit"></input>
            </form>);
        }
        return (
            <>
                <div className="todo-list">
                    {this.state && this.state.todoList && this.state.todoList.map(todo => (<TodoItem name={todo.name} key={todo.name} />))}
                </div>

                <button title="add task" onClick={() => this.setState({ displayNewTaskForm: !this.state.displayNewTaskForm })}> add a task</button>

                { form}
            </>
        );
    }
}