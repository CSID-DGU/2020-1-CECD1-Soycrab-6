import React from 'react';
import Event from './Event';

function PropagatorEdit({ propagator }) {
  const { realId, edgeId, alias, events, fromTraceVar, toTraceVar } = propagator;

  return (
    <>
      <h6 className="d-flex">Breadcrumb 들어갈 자리</h6>
      <h2>Edge #{edgeId}의 전파규칙 수정</h2>
      <div className="row row-cols-w">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Propagator List
              </h5>
            </div>
            <ul className="list-group list-group-flush">
              {alias.events.map(
                event => <li className="list-group-item" key={event.realId}>
                            <Event
                              realId={event.realid}
                              parentType='edge'
                              parentId={realId}
                            />
                          </li>
              )}
            </ul>
          </div>
        </div>
        <div className="col"></div>
      </div>
    {/* <div>
      {realId}-{edgeId} 전파자 수정 페이지
      <h1>fromTraceVar: {fromTraceVar}</h1>
      <h1>toTraceVar: {toTraceVar}</h1>
    </div> */}
    </>
  )
};

export default PropagatorEdit;