import React from 'react';
import styled from 'styled-components';
import Event from './Event';


function EventEdit({ event }) {
  const { realId, args, base, callTargetRepr, parentId, parentType } = event;

  return (
    <>
    
      {realId} 번째 이벤트 수정 페이지
      <h1>parentId: {parentId}</h1>
      <h1>parentType: {parentType}</h1>
      <div className="row row-cols-2">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Event Property
              </h5>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                    Events List
                </h5>
              </div>
              <ul className="list-group list-group-flush">
                
              </ul>
            </div>
          </div>
        </div>
        <div className="col border border-dart">
          <h5 className="mt-4 mb-2">type</h5>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                  Event 추가
              </h5>
            </div>
          </div>
          <h5 className="mt-4 mb-2">name</h5>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                  Event 추가
              </h5>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <h2 className="mb-4">left</h2>
              <h5 className="mb-2">type</h5>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                      Event 추가
                  </h5>
                </div>
              </div>
            </div>
            <div className="col">
              <h2 className="mb-4">right</h2>
              <h5 className="mb-2">type</h5>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                      Event 추가
                  </h5>
                </div>
              </div>
            </div>
            <div className="col">
              <h2 className="mb-4">accessor</h2>
              <h5 className="mb-2">type</h5>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                      Event 추가
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <h5 className="mb-2">name</h5>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                      Event 추가
                  </h5>
                </div>
              </div>
            </div>
            <div className="col">
              <h5 className="mb-2">kind</h5>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                      Event 추가
                  </h5>
                </div>
              </div>
            </div>
            <div className="col">
              <h5 className="mb-2">kind</h5>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                      Event 추가
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default EventEdit;