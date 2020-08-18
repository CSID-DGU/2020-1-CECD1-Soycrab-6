import React from 'react';
import { IoIosInformationCircleOutline } from 'react-icons/io';

const buttonStyle= {
  position: 'fixed',
  bottom: 0,
  right: 0,
  marginRight: 5,
  marginBottom: 5,
}

const helpIconStyle = {
  width: '2em',
  height: '2em',
}

function InfoButton() {
  return(
    <>
      <button type="button" className="btn btn-success" style={buttonStyle}>
        <IoIosInformationCircleOutline style={helpIconStyle} />
      </button>
    </>
  )
}

export default React.memo(InfoButton);