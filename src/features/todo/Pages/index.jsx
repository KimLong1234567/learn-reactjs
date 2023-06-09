import React, { useState } from "react";
import PropTypes from "prop-types";
import TodoList from "../components/TodoList";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const initTodoList = [
    {
      id: 1,
      tittle: "Eat",
      status: "new",
    },
    {
      id: 2,
      tittle: "Sleep",
      status: "completed",
    },
    {
      id: 3,
      tittle: "Code",
      status: "new",
    },
  ];

  const [todoList, setTodoList] = useState(initTodoList);

  const handleTodoClick = (todo, idx) => {
    // clone  current array to the new one
    const newTodoList = [...todoList];

    console.log(todo, idx);
    // toggle state
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === "new" ? "completed" : "new",
    };
    //newTodoList[idx] = newTodo;

    //update todo list
    setTodoList(newTodoList);
  };

  return (
    <div>
      <h3>Todo List</h3>
      <TodoList todoList={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default TodoFeature;
