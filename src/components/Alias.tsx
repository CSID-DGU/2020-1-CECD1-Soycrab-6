import React, { CSSProperties } from 'react';
import styled, { css } from 'styled-components';

type AliasProps = {
  name: string;
};

const AliasBox = styled.button`
  text-align: center;
  justify-content: center;
  font-size: 1.3rem;
  padding: 0.8rem;
  background: #12b886;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #20c997;
  }
  &:active {
    background: #0ca678;
  }

  span {
    color: #c92a2a;
    font-weight: bold;  
  }
`;

const AliasVariable = styled.span`
  color: #c92a2a;
  font-weight: bold;
`;

function Alias({ name }: AliasProps) {
  return (
    <AliasBox>
      <span>tained</span> = _.{name}()
    </AliasBox>
  )
}

export default Alias;