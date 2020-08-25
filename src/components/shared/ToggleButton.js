import React from 'react';
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
  ToggleBtn:checked{
    color: #73ca25;
  }
  /* ${props => !props.check && css`
    color: #000;
  `}
  ${props => props.check && css`
    color: #73ca25;
  `} */
`;

const RightLabel = styled.label`
  color: #73ca25;
  ToggleButton:checked{
    color: #000;
  }
  /* ${props => !props.check && css`
    color: #73ca25;
  `}
  ${props => props.check && css`
    color: #000;
  `} */
`;


function ToggleButton({leftLabel, rightLabel, switchId}) {
  return(
    <>
      <div className="col">
        <LeftLabel>{leftLabel}</LeftLabel>
      </div>
      <div className="col">
        <ToggleBtn>
          <div className="custom-control custom-switch">
            <input type="checkbox" className="custom-control-input" onChange={isCheck(switchId)} id={switchId} />
            <label className="custom-control-label" htmlFor={switchId} onClick={onClick}></label>
          </div>
        </ToggleBtn>
      </div>
      <div className="col">
        <RightLabel>{rightLabel}</RightLabel>
      </div>
    </>
  )
}

export default React.memo(ToggleButton);