import React from 'react';
import styled, { css } from 'styled-components';
import ToggleButton from '../../shared/ToggleButton';
import SizeVar from '../Partial/SizeVar';

function arrayCreateEvent({ event }) {
  const { productPrefix } = event;
  
  return (
    <>  
      <div className="col card mb-5">
        <h5 className="mt-3 mb-2">type</h5>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              {productPrefix}
            </h5>
          </div>
        </div>
        <div className="row mt-5">
          <SizeVar event={event} />
        </div>
        <div className="row mt-5">
          <ToggleButton leftLabel="Name" rightLabel="Fqn" switchId={1}/>
        </div>  
        <div className="row mt-3 mb-3">
          <ToggleButton leftLabel="Plain" rightLabel="Regex" switchId={2}/>
        </div> 
      </div>
    </>
  )
};

export default arrayCreateEvent;
