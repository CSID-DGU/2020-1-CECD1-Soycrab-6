import React from 'react';
import { motion } from 'framer-motion';

const containerStyle = {
  position: 'relative',
  width: '10rem',
  height: '10rem',
  margin: '0 auto',
  marginTop: '20%',
};

const circleStyle = {
  display: 'block',
  width: '10rem',
  height: '10rem',
  border: '0.5rem solid #e9e9e9',
  borderTop: '0.5rem solid #73ca25',
  borderRadius: '50%',
  position: 'absolute',
  boxSizing: 'border-box',
  top: 0,
  left: 0,
};

const spinTransition = {
  loop: Infinity,
  duration: 1,
  ease: 'linear',
};

function Spinner() {
  return(
    <>
      <div style={containerStyle}>
        <motion.span style={circleStyle} animate={{ rotate: 360 }} transition={spinTransition}></motion.span>
      </div>
    </>
  );
}

export default React.memo(Spinner);