import React from 'react';
import styled, { css } from 'styled-components';
import SelectForm from '../../shared/SelectForm';

function Base({ event }) {
  const { base } = event;

  const baseOption = ["a", "b", "c", "d", "e"];

  return (
    <>
      <div className="row mt-3">
        <div className="col">
          <h2 className="mb-4">Base</h2>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                  {base.productPrefix}
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <h5 className="mb-2">kind</h5>
          <div className="card">
            <SelectForm namespace="BaseKind" optionArray={baseOption} />
          </div>
        </div>
      </div>
      <div className="row mt-3 mb-4">
        <div className="col">
          <h5 className="mb-2">str</h5>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                  Event 추가
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Base;