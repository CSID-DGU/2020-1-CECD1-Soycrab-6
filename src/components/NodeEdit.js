import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { MdAddCircle, MdEdit, MdDelete } from 'react-icons/md';
import Event from './Event';
import Nothing from './shared/Nothing';
import LinkButton from './shared/LinkButton';
import Breadcrumb from './shared/Breadcrumb';

const IconButton = styled.span`
  font-size: 25px;
  cursor: pointer;
  &:hover {
    color: #91A3B5;
  }
`;

function NodeEdit({ node, onChangeName }) {
  const eventArray = ['callEvent', 'anyArrayAccessEvent', 'arrayCreateEvent', 'assignmentEvent', 'unaryOperationEvent', 'binaryOperationEvent', 'branchConditionEvent', 'predefEventAlias'];
  const { realId, name, filterId, isEnd, alias, traceVars } = node;

  const history = useHistory();
  console.log(history);

  const marginTop = {
    marginTop: '40px'
  };

  const [nodeName, setNodeName] = useState(name);
  const onChange = e => {
    setNodeName(e.target.value);
  };

  const onUpdateName = e => {
    e.preventDefault();
    onChangeName(nodeName);
    setNodeName(nodeName);
  };

  return (
    <>
      <Breadcrumb />
      <div className="input-group input-group-lg mb-3" style={marginTop}>
        <div className="input-group-prepend">
          <span className="input-group-text">노드이름</span>
        </div>
        <input onChange={onChange} value={nodeName} type="text" className="form-control" placeholder="NodeName" />
        <div className="input-group-append">
          <button onClick={onUpdateName} className="btn btn-outline-secondary" type="button">저장</button>
        </div>
      </div>
      
      {/* Modal */}
      <div className="modal fade" id="eventModal" tabIndex="-1" aria-labelledby="eventModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="eventModalLabel">Event 추가</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="card">
                <ul className="list-group list-group-flush">
                  {eventArray.map(
                    (event, index) => <LinkButton className="list-group-item" key={index} onClick={() => console.log('click')}>{event}</LinkButton>
                  )}
                </ul>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <div className="row row-cols-2">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">추적변수<IconButton><MdAddCircle className="float-right" data-toggle="modal" data-target="#traceVarModal" /></IconButton></h5>
            </div>
            <ul className="list-group list-group-flush">
              <LinkButton className="list-group-item" onClick={() => console.log('click')}>
                sampleTraceVar
                <div className="float-right">
                  <IconButton>
                    <MdEdit data-toggle="modal" data-target="#traceVarEditModal" />
                  </IconButton>
                  <IconButton>
                    <MdDelete />
                  </ IconButton>
                </div>
              </LinkButton>
            </ul>
          </div>
        </div>

        {/* traceVar add Modal */}
        <div className="modal fade" id="traceVarModal" tabIndex="-1" aria-labelledby="traceVarModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <form>
                <div className="modal-header">
                  <h5 className="modal-title" id="traceVarModalLabel">추적변수 추가</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="card">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="추적변수 이름을 입력해주세요..."
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Modal */}

        {/* traceVar edit Modal */}
        <div className="modal fade" id="traceVarEditModal" tabIndex="-1" aria-labelledby="traceVarEditModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <form>
                <div className="modal-header">
                  <h5 className="modal-title" id="traceVarEditModalLabel">추적변수 수정</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="card">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="추적변수 이름을 입력해주세요..."
                      value="sampleTraceVar"
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Modal */}
      
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                {alias.name} (Alias 이름)
              </h5>
            </div>
            <div className="card ml-3 mr-3 mb-3">
              <div className="card-body">
                <h5 className="card-title">
                    Events List<IconButton><MdAddCircle className="float-right" data-toggle="modal" data-target="#eventModal" /></IconButton>
                </h5>
              </div>
              <div className="list-group list-group-flush">
                {alias.events.length > 0 
                ? alias.events.map(
                    event => <LinkButton className="list-group-item list-group-item-action" key={event.realId}>
                                <Event 
                                  realId={event.realId}
                                  parentType='node'
                                  parentId={realId} />
                              </LinkButton>)
                : <Nothing />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(NodeEdit);