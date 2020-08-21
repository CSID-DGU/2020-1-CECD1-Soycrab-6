import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.div`
  color: black;
  cursor: pointer;

  &:hover {
    background-color: rgba(115, 202, 37, 0.2);
  }
`;

function LinkButton({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

export default LinkButton;