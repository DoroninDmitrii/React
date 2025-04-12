'use client';

import React, { useState } from 'react';
import { useObservable } from './useObservable';
import { taskService } from './service';

export const TaskList = () => {
  const tasks = useObservable(taskService.filteredTasks$, []);
  const [input, setInput] = useState('');

  return (
    <div>
      <h2>To-do list</h2>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add task..."
      />
      <button onClick={() => { taskService.addTask(input); setInput(''); }}>
        Add
      </button>

      <div>
        <button onClick={() => taskService.setFilter('all')}>All</button>
        <button onClick={() => taskService.setFilter('active')}>Active</button>
        <button onClick={() => taskService.setFilter('completed')}>Completed</button>

        <button onClick={() => taskService.setSort('newest')}>Newest</button>
        <button onClick={() => taskService.setSort('oldest')}>Oldest</button>
      </div>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => taskService.toggleTask(task.id)}
              />
              {task.text} ({task.createdAt.toLocaleTimeString()})
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

