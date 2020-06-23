import React, { CSSProperties } from 'react';
import styled, { css } from 'styled-components';

type AliasProps = {
  name: string;
};

const AliasBox = styled.div`
  text-align: center;
  justify-content: center;
  font-size: 2rem;
  padding: 1rem;
  background: #12b886;
  border: 1px solid black;
  border-radius: 5px;
  width: 40rem,
  cursor: pointer;
`;

function Alias({ name }: AliasProps) {
  return (
    <AliasBox>
      <span>tained</span>
      <span>= _.{name}()</span>
    </AliasBox>
  )
}

export default Alias;