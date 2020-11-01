import React from 'react';
import styled, { css } from 'styled-components';
import SelectForm from '../../shared/SelectForm';
import ToggleButton from '../../shared/ToggleButton';

function Target({ event }) {
  const { productPrefix, callTargetRepr } = event;

  const targetOption = ["a", "b", "c", "d", "e"];

  return (
    <>
      <div className="row mt-3">
        <div className="col">
          <h2 className="mb-4">Target</h2>
          <h5 className="mb-2">kind</h5>
          <div className="card">
            <SelectForm namespace={productPrefix} optionArray={targetOption} />
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <h5 className="mb-2">str</h5>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                  {callTargetRepr.repr.text}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Target;