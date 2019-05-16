import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

const Container = styled.div``;

const CheckBox = styled.input``;

const Text = styled.span``;

const Delete = styled.div``;

const todoItem = ({ toDo, handleDelete }) => (
  <Container>
    <div>
      <CheckBox type="checkbox" done={toDo.done} />
      <Text>{toDo.text}</Text>
    </div>
    <div>
      <Delete onClick={handleDelete(toDo)}>[삭제]</Delete>
      {/* give toDo to PageTemplate */}
    </div>
  </Container>
);
todoItem.propTypes = {
  toDo: propTypes.object,
  handleDelete: propTypes.func
};

export default todoItem;
