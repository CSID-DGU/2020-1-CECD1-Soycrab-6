import React from 'react';
import HeadNavbar from '../components/shared/HeadNavbar';

function InfoPage() {
  return (
    <>
      <HeadNavbar />
      <h3>도움말</h3>
    </>
  )
}

export default React.memo(InfoPage);