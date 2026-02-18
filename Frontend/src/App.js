import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Edit, Delete } from '@material-ui/icons';
import './App.css'; // Import the CSS file for styling

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [editTask, setEditTask] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:8888/api/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const addTask = async () => {
    try {
      const response = await axios.post('http://localhost:8888/api/tasks', {
        title: newTask,
        description: newDescription,
        completed: false,
      });
      setTasks([...tasks, response.data]);
      setNewTask('');
      setNewDescription('');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const toggleComplete = async (taskId) => {
    try {
      const taskToUpdate = tasks.find((task) => task.id === taskId);
      const response = await axios.put(`http://localhost:8888/api/tasks/${taskId}`, {
        ...taskToUpdate,
        completed: !taskToUpdate.completed,
      });
      const updatedTasks = tasks.map((task) => (task.id === taskId ? response.data : task));
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Error toggling task completion:', error);
    }
  };

  const editTaskDetails = async (taskId, title, description) => {
    try {
      const response = await axios.put(`http://localhost:8888/api/tasks/${taskId}`, {
        title,
        description,
      });
      const updatedTasks = tasks.map((task) => (task.id === taskId ? response.data : task));
      setTasks(updatedTasks);
      setEditTask(null);
    } catch (error) {
      console.error('Error updating task details:', error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await axios.delete(`http://localhost:8888/api/tasks/${taskId}`);
      const updatedTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="center">
      
      <h1>Todo List</h1>
      <div className="add-task">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <input
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          placeholder="Add a description"
        />
        <button className="button" onClick={addTask}>
          Add Task
        </button>
      </div>
      <table className="task-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>
                <button
                  className={`button ${task.completed ? 'completed' : 'incomplete'}`}
                  onClick={() => toggleComplete(task.id)}
                  style={{ width: '130px' }} // Adjust the width as needed
                >
                  {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
                </button>
                {editTask === task.id ? (
                  <>
                    <input
                      type="text"
                      value={task.title}
                      onChange={(e) => {
                        const updatedTasks = tasks.map((t) =>
                          t.id === task.id ? { ...t, title: e.target.value } : t
                        );
                        setTasks(updatedTasks);
                      }}
                      style={{ marginBottom: '8px' }} 
                    />
                    <input
                      type="text"
                      value={task.description}
                      onChange={(e) => {
                        const updatedTasks = tasks.map((t) =>
                          t.id === task.id ? { ...t, description: e.target.value } : t
                        );
                        setTasks(updatedTasks);
                      }}
                      style={{ marginBottom: '8px' }}
                    />
                    <button className="button" onClick={() => editTaskDetails(task.id, task.title, task.description)}
                    style={{ marginBottom: '8px'  }} 
                    >
                      Save
                    </button>
                  </>
                ) : (
                  <>
                    <button className="button" onClick={() => setEditTask(task.id)}
                    style={{ width: '50px', height: '40px' }} // Adjust the width as needed
                    style={{ marginBottom: '8px' }} 
                    >
                      <Edit />
                    </button>
                    <button className="button" onClick={() => deleteTask(task.id)}
                    style={{ width: '50px' }} // Adjust the width as needed
                    >
                      <Delete />
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
