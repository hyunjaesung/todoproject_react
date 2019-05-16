import React, { Component } from "react";
import styled from "styled-components";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";

const Header = styled.header``;

class PageTemplate extends Component {
  state = {
    inputTerm: "",
    addTerm: "",
    todos: [{ id: 0, text: "투두만들기", done: true }]
  };

  handleChange = event => {
    const {
      target: { value }
    } = event;
    console.log(value);
    this.setState({ inputTerm: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { inputTerm } = this.state;

    if (inputTerm !== "") {
      // add as todo item
      this.setState({ inputTerm: "" }); // after inputting make input empty
      this.setState({ addTerm: inputTerm });
    }
  };

  render() {
    const { inputTerm } = this.state;

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
        {/* <TodoList /> */}
      </>
    );
  }
}

export default PageTemplate;
