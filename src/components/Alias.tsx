import React, { CSSProperties } from 'react';
import styled from 'styled-components';
import { grey } from 'color-name';

export type AliasProps = {
  id: number,
  nodeId: number,
  name: string;
  active: boolean;
};

const AliasBox = styled.button`
  text-align: center;
  justify-content: center;
  font-size: 1.3rem;
  padding: 0.8rem;
  background: #12b886;
  border: none;
  border-radius: 5px;
  margin-top: 1rem;
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

function Alias({ name, nodeId, active }: AliasProps) {
  return (
    <AliasBox>
      <span>tained</span> = _.{name}()
    </AliasBox>
  )
}

export default Alias;