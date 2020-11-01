import React from 'react';
import styled, { css } from 'styled-components';
import SelectForm from '../../shared/SelectForm';



function Lhs({ event }) {
  const { callTargetRepr } = event;

  const leftTypeOption = ["a", "b", "c", "d", "e"];
  
  return (
    <>
      <div className="col">
        <h2 className="mb-4">left</h2>
        <div className="row">
          <div className="col-12">
            <h5 className="mb-2">type</h5>
            <div className="card">
                <SelectForm namespace="LeftType" optionArray={leftTypeOption} />
            </div>
          </div>
          <div className="col-12">
            <h5 className="mb-2">name</h5>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  {callTargetRepr.repr.text}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Lhs;