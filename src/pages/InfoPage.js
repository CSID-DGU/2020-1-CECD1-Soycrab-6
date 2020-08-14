import React from 'react';
import HeadNavbar from '../components/shared/HeadNavbar';
import { HeaderMain } from '../components/airframe/HeaderMain';

function InfoPage() {
  return (
    <>
      <HeadNavbar />
      <HeaderMain 
        title="도움말"
        className="mb-4 mb-lg-5"
      />
    </>
  )
}

export default React.memo(InfoPage);