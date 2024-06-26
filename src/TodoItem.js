import React from 'react';

function TodoItem({
  todo,
  index,
  deleteTodo,
  toggleComplete,
  startEditing,
  editingIndex,
  editingValue,
  setEditingValue,
  saveEdit,
  cancelEdit
}) {
  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      {editingIndex === index ? (
        <span>
          <input
            type="text"
            value={editingValue}
            onChange={(e) => setEditingValue(e.target.value)}
          />
          <button onClick={() => saveEdit(index)}>Save</button>
          <button onClick={cancelEdit}>Cancel</button>
        </span>
      ) : (
        <span>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(index)}
          />
          {todo.text}
          <button onClick={() => startEditing(index)}>Edit</button>
          <button onClick={() => deleteTodo(index)}>Delete</button>
        </span>
      )}
    </li>
  );
}

export default TodoItem;
