import React, { useState } from 'react';
import Event from './Event';
import Nothing from './shared/Nothing';
import LinkButton from './shared/LinkButton';

function NodeEdit({ node, onChangeName }) {
  const eventArray = ['호출식', '접근식', '연산식', '배열 참조', '배열 생성', '개별 이벤트 템플릿'];
  const { realId, name, filterId, isEnd, alias, traceVars } = node;

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
      <h6 className="d-flex">Breadcrumb 들어갈 자리</h6>
      <div className="input-group input-group-lg mb-3" style={marginTop}>
        <div className="input-group-prepend">
          <span className="input-group-text">노드이름</span>
        </div>
        <input onChange={onChange} value={nodeName} type="text" className="form-control" placeholder="NodeName" />
        <div className="input-group-append">
          <button onClick={onUpdateName} className="btn btn-outline-secondary" type="button">저장</button>
        </div>
      </div>
      <div className="row row-cols-2">
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
                    Events List
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
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                  Event 추가
              </h5>
            </div>
            <ul className="list-group list-group-flush">
              {eventArray.map(
                (event, index) => <LinkButton className="list-group-item" key={index} onClick={() => console.log('click')}>{event}</LinkButton>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(NodeEdit);