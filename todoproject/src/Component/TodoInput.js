import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

const Form = styled.form``;

const Input = styled.input``;

const todoInput = ({ handleChange, handleSubmit, inputTerm }) => (
  <Form onSubmit={handleSubmit}>
    <Input onChange={handleChange} value={inputTerm} />
  </Form>
);

todoInput.propTypes = {
  inputTerm: propTypes.string,
  handleChange: propTypes.func,
  handleSubmit: propTypes.func
};

export default todoInput;
