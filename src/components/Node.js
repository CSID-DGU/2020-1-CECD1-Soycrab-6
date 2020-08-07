import React from 'react';
import styled from 'styled-components';
import { MdDelete } from 'react-icons/md';
import { IoIosAddCircleOutline } from 'react-icons/io';

const NodeBox = styled.div`
  padding: 1.8rem;
  font-size: 14px;
  font-weight: bold;
  color: black;
  background: #059900;
  width: 150px;
  height: 150px;
  text-align: center;
  border-radius: 5px;
  position: relative;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }

  p {
    &.node-name {
      color: black;
    }
  }

  span {
    &.trace-vars {
      color: #c92a2a;

      &:hover {
        color: black;
      }
    }
  }
`;

const Add = styled.div`
  position: absolute;
  top: 0px;
  left: 5px;
  color: #dee2e6;
  font-size: 22px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
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

function Node({ node }) {
  return (
    <NodeBox>
      <Add>
        <IoIosAddCircleOutline />
      </Add>
      <Remove>
        <MdDelete />
      </Remove>
      <p className="node-name">노드ID: {node.id}</p>
      <span onClick={() => console.log(node.events)} className="trace-vars">{node.traceVars.join(', ')}</span>
    </NodeBox>
  )
};

export default React.memo(Node);