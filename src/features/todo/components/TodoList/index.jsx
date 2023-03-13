import React from "react";
import PropTypes from "prop-types";

//khai bao aka nhan vao todoList
TodoList.propTypes = {
  todoList: PropTypes.array,
};

//Gia tri mac dinh
TodoList.defaultProps = {
  todoList: [],
};

function TodoList({ todoList }) {
  return (
    <ul>
      {todoList.map((todo) => (
        <li key={todo.id}>{todo.tittle}</li>
      ))}
    </ul>
  );
}

export default TodoList;
