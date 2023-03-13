import React from "react";
import PropTypes from "prop-types";
import TodoList from "../components/TodoList";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const todoList = [
    {
      id: 1,
      tittle: "Eat",
    },
    {
      id: 2,
      tittle: "Sleep",
    },
    {
      id: 3,
      tittle: "Code",
    },
  ];
  return (
    <div>
      <h3>Todo List</h3>
      <TodoList todoList={todoList} />
    </div>
  );
}

export default TodoFeature;
