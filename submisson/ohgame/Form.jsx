import React, { useState } from 'react';

function Form() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTask = () => {
    if (input.trim() === '') return;
    setTasks([...tasks, input]);
    setInput('');
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>ToDo リスト</h1>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="タスクを入力"
        />
        <button onClick={handleAddTask}>追加</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}{' '}
            <button onClick={() => handleDeleteTask(index)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Form;
