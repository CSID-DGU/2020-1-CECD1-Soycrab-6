import React, { useState, useRef } from 'react';
import styled, {css} from 'styled-components';

const ToggleBtn = styled.div`
  .custom-control {
    input.custom-control-input {
      width: 100px;
    }

    label.custom-control-label {
      &::before {
        width: 5rem;
        height: 2rem;
        border-radius: 25px;
        border-color: #73ca25;;
        background-color: #73ca25;
      }
      &::after {
        transform: translateX(3.7rem);
        left: calc(-3rem + 2px);
        width: calc(2rem - 4px);
        height: calc(2rem - 4px);
        border-radius: 25px;
        background-color: #fff;
      }
    }
  }
`;

const LeftLabel = styled.label`
  color: #000;
  ${ToggleInput}:checked{
    color: #73ca25;
  }
`;

const RightLabel = styled.label`
  color: #73ca25;
  ${ToggleButton}:checked{
    color: #000;
  }
`;

const ToggleInput = styled.input `
  &:checked{
    ${LeftLabel} {
      color: #73ca25;
    }
    ${RightLabel} {
      color: #000;
    }
  }
  &:not(:checked){
    ${RightLabel} {
      color: #73ca25;
    }
    ${LeftLabel} {
      color: #000;
    }
  }
`;

function ToggleButton({leftLabel, rightLabel, switchId}) {
  const checkInput = useRef()

  const onChange = e => {
    console.log({LeftLabel}.componentStyle)
    console.log(RightLabel.componentStyle.rules)
    window.e = e;
    window.checkInput = checkInput;
   
    console.log(checkInput.current)
  }

  return(
    <>
      <div className="col">
        <LeftLabel ref={checkInput}>{leftLabel}</LeftLabel>
      </div>
      <div className="col">
        <ToggleBtn>
          <div className="custom-control custom-switch">
            <ToggleInput type="checkbox" className="custom-control-input" onChange={onChange} id={switchId}/>
            <label className="custom-control-label" htmlFor={switchId}></label>
          </div>
        </ToggleBtn>
      </div>
      <label htmlFor="checkbox_id"></label>
      <div className="col">
        <RightLabel>{rightLabel}</RightLabel>
      </div>
    </>
  )
}

export default React.memo(ToggleButton);