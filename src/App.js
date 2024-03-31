import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask, editTask } from './redux/actions';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (!task) return;
    dispatch(addTask({ text: task, id: Date.now() }));
    setTask('');
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleEditTask = (id, currentText) => {
    const newText = prompt('Редактировать задачу:', currentText);
    if (newText !== null) {
      dispatch(editTask(id, newText));
    }
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Добавьте задачу"
      />
      <button onClick={handleAddTask}>Добавить задачу</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <div>{todo.text}</div>
            <div className="action-buttons">
              <button onClick={() => handleDeleteTask(todo.id)}>Удалить</button>
              <button onClick={() => handleEditTask(todo.id, todo.text)}>
                Редактировать
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
