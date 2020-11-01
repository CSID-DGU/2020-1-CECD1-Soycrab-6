import React from 'react';
import styled, { css } from 'styled-components';
import Base from '../Partial/Base';
import Target from '../Partial/Target';

function CallEvent({ event }) {
  const { productPrefix } = event;
  
  return (
    <>
      <div className="col card">
        <h5 className="mt-3 mb-2">type</h5>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              {productPrefix}
            </h5>
          </div>
        </div>
        <div className="row mt-3">
          <Base event={event}/>
        </div>
        <Target event={event}/>
      </div>
    </>
  )
};

export default CallEvent;