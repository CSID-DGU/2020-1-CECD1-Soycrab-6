import React from 'react';
import { IoIosInformationCircleOutline } from 'react-icons/io';

const buttonStyle= {
  position: 'fixed',
  bottom: 0,
  right: 0,
  
}

const helpIconStyle = {
  width: '2em',
  height: '2em',
}

function InfoButton() {
  return(
    <>
      <button color="success" className="mb-2 mr-sm-2 mb-sm-2" style={buttonStyle}>
        <IoIosInformationCircleOutline style={helpIconStyle} />
      </button>
    </>
  )
}

export default React.memo(InfoButton);