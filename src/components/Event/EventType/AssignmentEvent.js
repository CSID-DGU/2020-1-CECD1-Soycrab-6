import React from 'react';
import styled, { css } from 'styled-components';
import ToggleButton from '../../shared/ToggleButton';
import Lhs from '../Partial/Lhs';
import Rhs from '../Partial/Rhs';


function AssignmentEvent({ event }) {
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
          <Lhs event={event}/>
          <Rhs />
          {/* <div className="col">
            <h2 className="mb-4">accessor</h2>
            <div className="row">
              <div className="col-12">
                <h5 className="mb-2">type</h5>
                <div className="card">
                  <SelectForm namespace="AccessorType" optionArray={accessorTypeOption} />
                </div>
              </div>
              <div className="col-12">
                <h5 className="mb-2">kind</h5>
                <div className="card">
                  <SelectForm namespace="AccessorKind" optionArray={accessorKindOption} />
                </div>
              </div>
            </div>
          </div> */}
        </div>
        {/* <Base event={event}/> */}
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

export default AssignmentEvent;
