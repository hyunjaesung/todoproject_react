import React, { Component } from "react";
import styled from "styled-components";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Header = styled.header``;

class PageTemplate extends Component {
  state = {
    inputTerm: "",
    toDos: []
  };

  getId = () => {
    // make new ID
    const { toDos } = this.state;

    if (toDos.length === 0) {
      return 1;
    }
    console.log(toDos);

    let maxId = 0;

    toDos.forEach(todo => {
      console.log(todo);
      if (todo.id >= maxId) {
        maxId = todo.id;
        console.log("max : " + maxId);
      }
    });
    return maxId + 1;
  };

  handleChange = event => {
    const {
      target: { value }
    } = event;
    // console.log(value);
    this.setState({ inputTerm: value });
  };

  handleSubmit = async event => {
    event.preventDefault();

    const { inputTerm, toDos } = this.state;

    const newId = this.getId();

    if (inputTerm !== "" && (await newId)) {
      const newTodo = { id: newId, text: inputTerm, done: false };
      toDos.push(newTodo);
      // add as todo item
      this.setState({ inputTerm: "" }); // after inputting make input empty
      this.setState({ toDos });
    }
  };

  handleDelete = todo => {
    const { toDos } = this.state;
    //console.log(todo);

    const index = toDos.findIndex(potato => potato.id === todo.id);

    const newToDos = [
      ...toDos.slice(0, index),
      ...toDos.slice(index + 1, toDos.length)
    ];

    console.log((todo = " has deleted! "));
    //console.log(newToDos);

    this.setState({ toDos: newToDos });
  };

  render() {
    const { inputTerm, toDos } = this.state;

    return (
      <>
        <Header>
          <h1>일정관리</h1>
        </Header>
        <TodoInput
          inputTerm={inputTerm}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <TodoList toDos={toDos} handleDelete={this.handleDelete} />
      </>
    );
  }
}

export default PageTemplate;
