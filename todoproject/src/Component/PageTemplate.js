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

  handleChange = event => {
    const {
      target: { value }
    } = event;
    // console.log(value);
    this.setState({ inputTerm: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { inputTerm, toDos } = this.state;

    if (inputTerm !== "") {
      const newTodo = { id: toDos.length, text: inputTerm, done: false };
      toDos.push(newTodo);
      // add as todo item
      this.setState({ inputTerm: "" }); // after inputting make input empty
      this.setState({ toDos });
    }
  };

  handleDelete = todo => {
    const { toDos } = this.state;
  };

  render() {
    const { inputTerm, toDos } = this.state;
    //console.log(toDos);
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
