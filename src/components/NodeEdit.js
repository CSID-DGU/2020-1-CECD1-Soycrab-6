import React from 'react';
import Event from './Event';
import Nothing from './shared/Nothing';

function NodeEdit({ node }) {
  const eventArray = ['호출식', '접근식', '연산식', '배열 참조', '배열 생성', '개별 이벤트 템플릿'];
  const { realId, name, filterId, isEnd, alias, traceVars } = node;

  return (
    <>
      <h6 className="d-flex">Breadcrumb 들어갈 자리</h6>
      <h2>{name + " (노드이름)"}</h2>
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
                    event => <button className="list-group-item list-group-item-action" key={event.realId}>
                                <Event 
                                  realId={event.realId}
                                  parentType='node'
                                  parentId={realId} />
                              </button>)
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
                (event, index) => <li className="list-group-item" key={index}><a href="#">{event}</a></li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NodeEdit;