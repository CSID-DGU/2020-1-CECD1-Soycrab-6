import React from 'react';
import styled from 'styled-components';
import { MdDelete } from 'react-icons/md';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Popup from "reactjs-popup";
import { Popover, OverlayTrigger } from 'react-bootstrap';

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

const addPopup = () => (
  <Popup trigger={() => (<div><IoIosAddCircleOutline/></div>)} position="bottom right" closeOnDocumentClick>
    <div>
      <div className="pb-3">
        <label>추적변수 추가</label><br />
        <input type="text" placeholder="start typing ... " />
      </div>
    </div>
  </Popup>
);

const popOver = (
  <Popover id="popover-basic">
      <Popover.Content>
        <div>
          <div className="pb-3">
            <label>추적변수 추가</label><br />
            <input type="text" placeholder="start typing ... " />
          </div>
        </div>
      </Popover.Content>
    </Popover>
)

function Node({ node }) {
  const { realId, events, traceVars } = node;

  return (
    <NodeBox key={realId}>
      <Add>
        {/* <OverlayTrigger trigger="click" placement="top" overlay={popOver}>
          <IoIosAddCircleOutline/>
        </OverlayTrigger> */}
        <Popup trigger={() => (<div><IoIosAddCircleOutline/></div>)} position="bottom right" closeOnDocumentClick>
          <div>
            <div className="pb-3">
              <label>추적변수 추가</label><br />
              <input type="text" placeholder="start typing ... " />
            </div>
          </div>
        </Popup>
      </Add>
      <Remove>
        <MdDelete />
      </Remove>
      <Link to={`/nodes/edit/${realId}`}>
        <p className="node-name">노드ID: {realId}</p>
      </Link>
      <span onClick={() => console.log(events)} className="trace-vars">{traceVars.join(', ')}</span>
    </NodeBox>
  )
};

export default React.memo(Node);
