import React from 'react';
import styled from 'styled-components';
import { NodeType } from '../modules/nodes';
import { MdDelete, MdLibraryAdd } from 'react-icons/md';

type NodeProps = {
  node: NodeType;
};

const NodeBox = styled.div`
  padding: 1.8rem;
  font-size: 14px;
  font-weight: bold;
  color: black;
  background: #059900;
  width: 130px;
  height: 130px;
  text-align: center;
  border-radius: 5px;
  position: relative;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }

  span {
    color: #c92a2a;
  }
`;

const Remove = styled.div`
  position: absolute;
  top: 0px;
  right: 5px;
  color: #dee2e6;
  font-size: 22px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;

function Node({ node }: NodeProps) {
  return (
    <NodeBox>
      <Remove>
        <MdDelete />
      </Remove>
      추적 변수 : <span>{node.traceVars.join(', ')}</span>
    </NodeBox>
  )
};

export default React.memo(Node);