import React from 'react';
import Event from './Event';
import Nothing from './shared/Nothing';
import LinkButton from './shared/LinkButton';
import ToggleButton from './shared/ToggleButton';

function PropagatorEdit({ propagator }) {
  const { realId, edgeId, alias, args, fromTraceVar, toTraceVar } = propagator;

  return (
    <>
      <h6 className="d-flex">Breadcrumb 들어갈 자리</h6>
      <h2>Edge #{edgeId}의 전파규칙 수정</h2>
      <div className="row row-cols-2">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Propagator List
              </h5>
            </div>
            <ul className="list-group list-group-flush">
              {alias.events.length > 0 
                ? alias.events.map(
                  event => <LinkButton className="list-group-item" key={event.realId}>
                              <Event
                                realId={event.realId}
                                parentType='propagator'
                                parentId={realId}
                              />
                            </LinkButton>)
                : <Nothing />}
            </ul>
          </div>
        </div>
        <div className="col card">
          <h5 className="mt-3 mb-2">type</h5>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                type들어갈자리
              </h5>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <h2 className="mb-4">target</h2>
              <h5 className="mb-2">str</h5>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                      django.core.files.base.File
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <ToggleButton leftLabel="Name" rightLabel="Fqn" switchId={1}/>
          </div>  
          <div className="row mt-3 mb-3">
            <ToggleButton leftLabel="Plain" rightLabel="Regex" switchId={2}/>
          </div>
          <div className="row mt-3">
            <div className="col">
              <h5 className="mb-2">return</h5>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                      to
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <h5 className="mb-2">param0</h5>
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">
                      from
                  </h5>
                </div>
              </div>
            </div>
          </div>  
        </div>
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