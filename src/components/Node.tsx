import React from 'react';
import styled from 'styled-components';
import Alias, { AliasProps } from './Alias';

type NodeProps = {
  aliases: AliasProps[];
};

const NodeBox = styled.div`
  padding: 1.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
  background: #228be6;
  width: 300px;
  text-align: center;
  border-radius: 5px;

  span {
    color: #c92a2a;
  }
`;

function Node({ aliases }: NodeProps) {
  return (
    <NodeBox>
      추적 변수 : <span>tained</span>
      <br />
      {aliases.map(alias => (
        <Alias
          id={alias.id}
          name={alias.name}
          key={alias.id}
        />
      ))}
    </NodeBox>
  )
};

export default Node;