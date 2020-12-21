import TodoItem from "./TodoItem";

import React from 'react';

export default class TodoItemList extends React.Component {

    todoListKey = "todoItems";
    emptyForm = () => ({
        name: '',
        priority: 0,
        estimate: '',
        description: ''
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
            form = (<div className=""><form className="input-form" onSubmit={this.appendTask}>
                <input type="text" name="name" placeholder="task name" aria-label="name" onChange={(event) => this.handleFormUpdate(event)} value={this.state.formData.name}></input>
                <input type="number" name="priority" placeholder="priority" aria-label="priority" step="1" pattern="[0-9]" onChange={(event) => this.handleFormUpdate(event)} value={this.state.formData.priority}></input>
                <input type="text" name="estimate" placeholder="1 hour" aria-label="estimate" onChange={(event) => this.handleFormUpdate(event)} value={this.state.formData.estimate}></input>
                <input type="text" name="description" placeholder="important stuff" aria-label="description" onChange={(event) => this.handleFormUpdate(event)} value={this.state.formData.description}></input>
                <button className="btn waves-effect waves-light" type="submit">Submit<i className="material-icons right">send</i></button>
            </form></div>);
        }
        return (
            <>
                <div className="todo-list container">
                    {this.state && this.state.todoList && this.state.todoList.map(todo => (<TodoItem {...todo}  key={todo.name} />))}
                </div>

                <button title="add task" onClick={() => this.setState({ displayNewTaskForm: !this.state.displayNewTaskForm })} className="btn-floating btn-large waves-effect waves-light red add-task-button"><i className="material-icons">add</i></button>

                { form}
            </>
        );
    }
}