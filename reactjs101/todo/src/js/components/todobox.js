import React from 'react';
import TodoList from './todolist.js';
import AddTodoItem from './addtodoitem.js';
import { Button, Icon, Row, Col } from 'antd';
export default class TodoBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    "id": "1",
                    "task": "Make a TodoList Demo",
                    "complete": "false"
                }, {
                    "id": "2",
                    "task": "Learn ES6",
                    "complete": "false"
                }, {
                    "id": "3",
                    "task": "Hello React",
                    "complete": "true"
                }, {
                    "id": "4",
                    "task": "Find a job",
                    "complete": "false"
                }
            ]
        };
        this.handleToggleComplete = this.handleToggleComplete.bind(this);
        this.handleTaskDelete = this.handleTaskDelete.bind(this);
        this.handleAddTodoItem = this.handleAddTodoItem.bind(this);
    }

    generateGUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            const r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);_
        })
    }

    handleToggleComplete(taskId) {
        const data = this.state.data;
        for (let item of data) {
            if (item.id === taskId) {
                item.complete = item.complete === 'true' ? 'false' : 'true';
            }
        }
        this.setState({data});
    }

    handleTaskDelete(taskId) {
        let data = this.state.data;
        data = data.filter(task => task.id !== taskId);
        this.setState({data});
    }

    handleAddTodoItem(task) {
        const newItem = {
            id: this.generateGUID(),
            task,
            complete: 'false'
        };
        let data = this.state.data;
        data = data.concat([newItem]);
        this.setState(data);
    }

    render() {
        return (
            <div>
                <div className="well">
                    <h1 className="text-center">React TodoList</h1>
                    <TodoList data={this.state.data} toggleComplete={this.handleToggleComplete} deleteTask={this.handleTaskDelete}/>
                    <AddTodoItem saveNewItem={this.handleAddTodoItem}/>
                </div>
                <Row>
                    <Col span={12}>
                    </Col>
                    <Col span={12}>
                        <Button className="pull-left"><Icon type="user" /> <a href="http://rukeith.com">Rukeith</a></Button>
                        <Button className="pull-right"><Icon type="github" /> <a href="https://github.com/Rukeith">Rukeith</a></Button>
                    </Col>
                </Row>
            </div>
        )
    }
}
