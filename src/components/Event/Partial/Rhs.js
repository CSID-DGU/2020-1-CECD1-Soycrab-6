import React from 'react';
import styled, { css } from 'styled-components';
import SelectForm from '../../shared/SelectForm';



function Rhs() {
  const rightTypeOption = ["a", "b", "c", "d", "e"];
  const rightKindOption = ["a", "b", "c", "d", "e"];
  
  return (
    <>
      <div className="col">
        <h2 className="mb-4">right</h2>
        <div className="row">
          <div className="col-12">
            <h5 className="mb-2">type</h5>
            <div className="card">
              <SelectForm namespace="RightType" optionArray={rightTypeOption} />
            </div>
          </div>
          <div className="col-12">
            <h5 className="mb-2">kind</h5>
            <div className="card">
              <SelectForm namespace="RightKind" optionArray={rightKindOption} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Rhs;