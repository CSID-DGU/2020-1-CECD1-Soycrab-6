import React from 'react';
import Spinner from './Spinner';

function StateRender( loading, error, data ) {
  if (loading && !data) return <Spinner />;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;
};

export default StateRender;