import React from 'react';
import TodoItem from './TodoItem';

function TodoList({
  todos,
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
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          startEditing={startEditing}
          editingIndex={editingIndex}
          editingValue={editingValue}
          setEditingValue={setEditingValue}
          saveEdit={saveEdit}
          cancelEdit={cancelEdit}
        />
      ))}
    </ul>
  );
}

export default TodoList;
