import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import propTypes from "prop-types";

const todoList = ({ toDos, handleDelete }) => {
  return toDos.map(toDo => (
    <TodoItem key={toDo.id} toDo={toDo} handleDelete={handleDelete} />
  ));
};

todoList.propTypes = {
  toDos: propTypes.array
};

export default todoList;
