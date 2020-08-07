import React from 'react';
import styled from 'styled-components';
import { NodeType } from '../modules/nodes';
import { MdDelete, MdLibraryAdd } from 'react-icons/md';
import { Col } from 'react-bootstrap';

type NodeProps = {
  node: NodeType;
};

const NodeBox = styled.div`
  padding: 1.8rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
  background: #228be6;
  width: 250px;
  height: 130px;
  text-align: center;
  border-radius: 5px;
  position: relative;

  span {
    color: #c92a2a;
  }
`;

const Add = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;

const Remove = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  color: #dee2e6;
  font-size: 24px;
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
      <Add>
        <MdLibraryAdd />
      </Add>
      추적 변수 : <span>tained</span>
    </NodeBox>
  )
};

export default React.memo(Node);