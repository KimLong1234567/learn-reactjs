import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./style.scss";

//khai bao aka nhan vao todoList
TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
};

//Gia tri mac dinh neu cha ko truyen xuong
TodoList.defaultProps = {
  todoList: [],
  onTodoClick: null,
};

function TodoList({ todoList, onTodoClick }) {
  const handleTodoClick = (todo, idx) => {
    if (!onTodoClick) return;

    onTodoClick(todo, idx);
  };

  return (
    <ul className="todo-list">
      {todoList.map((todo, idx) => (
        <li
          key={todo.id}
          className={classnames({
            "todo-item": true,
            completed: todo.status === "completed",
          })}
          onClick={() => handleTodoClick(todo, idx)}
        >
          {todo.tittle}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
