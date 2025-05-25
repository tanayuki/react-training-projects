import React, { useState } from 'react';

export default function Todo() {
  // タスクのリストを保存する状態変数
  const [taskList, setTaskList] = useState([]);
  // 入力フィールドの値を保存する状態変数
  const [taskInput, setTaskInput] = useState('');

  // タスクを追加する関数
  const handleAddTask = () => {
    // 空白のみの入力は無視する
    if (taskInput.trim() === '') {
      return;
    }

    // 1. 現在のタスクリストのコピーを作成
    // 2. 新しいタスクを追加
    // 3. 状態を更新
    const newTaskList = [...taskList, taskInput.trim()];
    setTaskList(newTaskList);

    // 入力フィールドをクリア
    setTaskInput('');
  };

  // タスクを削除する関数
  const handleRemoveTask = (indexToRemove) => {
    // 1. 削除対象以外のタスクだけを含む新しい配列を作成
    const updatedTaskList = taskList.filter((_, index) => index !== indexToRemove);
    // 2. 状態を更新
    setTaskList(updatedTaskList);
  };

  // Enterキーを押してもタスクを追加できるようにする
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div>
      <h2>シンプルToDoリスト</h2>

      {/* タスク入力エリア */}
      <div>
        <input
          value={taskInput}
          onChange={(event) => setTaskInput(event.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="やることを入力"
        />
        <button onClick={handleAddTask}>追加</button>
      </div>

      {/* タスク一覧 */}
      <ul>
        {taskList.length === 0 ? (
          <li>タスクがありません。新しいタスクを追加してください。</li>
        ) : (
          taskList.map((task, index) => (
            <li key={index}>
              {task}{' '}
              <button
                onClick={() => handleRemoveTask(index)}
                style={{ color: 'red' }}
              >
                削除
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
