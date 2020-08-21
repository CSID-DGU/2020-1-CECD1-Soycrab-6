import React from 'react';
import styled from 'styled-components';

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
        background-color: #73ca25;;
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

function ToggleButton({switchId}) {
  return(
    <ToggleBtn>
      <div className="custom-control custom-switch">
        <input type="checkbox" className="custom-control-input" id={switchId} />
        <label className="custom-control-label" htmlFor={switchId}></label>
      </div>
    </ToggleBtn>
  )
}

export default React.memo(ToggleButton);