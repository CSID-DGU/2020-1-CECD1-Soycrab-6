import React from 'react';
import Spinner from './Spinner';
import ErrorPage from '../../pages/ErrorPage';

function StateRender({ loading, error, data }) {
  if (loading && !data) return <Spinner />;
  if (error) return <ErrorPage code="500" />;
  if (!data) return <ErrorPage code="404"/>;
  return null;
};

export default StateRender;