import React from 'react';
import styled from 'styled-components';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import NodePopup from './NodePopup';
import { useHistory } from 'react-router-dom';


const NodeBox = styled.div`
  padding: 1.8rem;
  font-size: 14px;
  font-weight: bold;
  color: black;
  background: #73ca25;
  width: 300px;
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
  const { realId, alias, traceVars } = node;
  const history = useHistory();

  const goToNodeEdit = realId => {
    history.push(`/nodes/edit/${realId}`);
  };

  return (
    <>
    <NodeBox onClick={() => goToNodeEdit(realId)} key={realId}>
      <Add>
        <NodePopup/>
      </Add>
      <Remove>
        <MdDelete />
      </Remove>
      <p className="node-name">노드ID: {realId}</p>
      <span onClick={() => console.log(alias)} className="trace-vars">{traceVars.join(', ')}</span>
    </NodeBox>
    </>
  )
};

export default React.memo(Node);
