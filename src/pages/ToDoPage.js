import React from 'react';
import CreateTodo from '../components/ToDo/CreateTodo';
import TodoList from '../components/ToDo/TodoList';

const ToDoPage = () => {
    return (
        <div className='container my-5'>
            <div className="row d-flex justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header text-center">
                            <h4 className='text-dark'>ToDo App</h4>
                        </div>
                        <div className="card-body">
                            <CreateTodo></CreateTodo>
                            <TodoList></TodoList>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
};

export default ToDoPage;