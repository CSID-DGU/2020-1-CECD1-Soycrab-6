import React from 'react';
import styled from 'styled-components';
import Popup from "reactjs-popup";
import Select from 'react-select';
import { MdDelete } from 'react-icons/md';
import { IoIosAddCircleOutline } from 'react-icons/io';

const NodeBox = styled.div`
  padding: 1.8rem;
  font-size: 14px;
  font-weight: bold;
  color: black;
  background: #73ca25;
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

const options = [
  { value: 'chocolate', label: '호출식' },
  { value: 'strawberry', label: '접근식' },
  { value: 'vanilla', label: '연산식' },
  { value: 'vanilla', label: '배열 참조' },
  { value: 'vanilla', label: '배열 생성' },
  { value: 'vanilla', label: '개별 이벤트 템플릿' },
]

const PopupExample = () => (
    <Popup trigger={<div><IoIosAddCircleOutline /></div>} position="top left">
      {close => (
        <div>
          <label>추적변수 추가</label>
          <input type="text" placeholder="start typing ... " />
          <label>이벤트 추가</label>
          <Select options={options} />
          <a className="close" onClick={close}>
            &times;
          </a>
        </div>
      )}
    </Popup>

)

function Node({ node }) {
  return (
    <NodeBox>
      <Add>
        <PopupExample />
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
