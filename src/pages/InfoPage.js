import React from 'react';
import HeadNavbar from '../components/shared/HeadNavbar';

function InfoPage() {
  return (
    <>
      <HeadNavbar />
      <h1>
        도움말
      </h1>
    </>
  )
}

export default React.memo(InfoPage);